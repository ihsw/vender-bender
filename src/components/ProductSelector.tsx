import * as React from 'react';
import { Alert, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { ProductItem } from '../types';

export interface StateProps {
  productItems: ProductItem[];
}

export interface DispatchProps {
}

export interface OwnProps {
}

interface FormData {
  code: string;
  money: string;
  [key: string]: any;
}

interface ValidationErrors {
  [key: string]: string;
}

interface State {
  formData: FormData;
  validationErrors: ValidationErrors;
  selectedProductItem: ProductItem | null;
}

type Props = StateProps & DispatchProps & OwnProps;

export class ProductSelector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      formData: {
        code: '',
        money: ''
      },
      validationErrors: {},
      selectedProductItem: null
    };
  }

  onSubmit(e: React.FormEvent<Form>) {
    e.preventDefault();

    alert('Ordering!');
  }

  canSubmit(): boolean {
    return this.validateCode(this.state.formData.code) === null
      && this.validateMoney(this.state.formData.money) === null;
  }

  onCancel() {
    console.log('ayy');
  }

  canCancel(): boolean {
    return this.validateMoney(this.state.formData.money) === null;
  }

  validateCode(code: string): string | null {
    if (code.length === 0) {
      return 'Code is blank!';
    }

    const validCodes = this.props.productItems.map((productItem) => productItem.item.code);
    if (validCodes.indexOf(code) === -1) {
      return 'Code is not valid!';
    }

    return null;
  }

  validateMoney(money: string): string | null {
    const providedMoney = Number(money);
    if (isNaN(providedMoney)) {
      return 'Money is not a valid number!';
    }

    if (providedMoney <= 0) {
      return 'Money must be greater than zero!';
    }

    const selectedProductItem = this.state.selectedProductItem;
    if (selectedProductItem !== null && providedMoney < selectedProductItem.item.price) {
      return `Insert more money than $${
        providedMoney.toFixed(2)
      } to purchase ${selectedProductItem.item.name} ${selectedProductItem.item.name}`;
    }

    return null;
  }

  validate(formData: FormData): ValidationErrors {
    const keys = Object.keys(formData);
    const errors: string[] = keys.map((key) => {
      switch (key) {
        case 'code':
          return this.validateCode(formData[key]);
        case 'money':
          console.log(formData[key]);
          return this.validateMoney(formData[key]);
        default:
          return null;
      }
    }).map((value) => value !== null ? value : '');

    const validationErrors: ValidationErrors = {};
    for (let i = 0; i < keys.length; i++) {
      if (errors[i].length === 0) {
        continue;
      }

      validationErrors[keys[i]] = errors[i];
    }

    return validationErrors;
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    // resolving new form data
    const formData = {
      ...this.state.formData,
      [name]: value
    };

    // resolving new validation-errors
    const validationErrors = this.validate(formData);

    // optionally resolving the selected product-item
    let selectedProductItem = this.state.selectedProductItem;
    if (!('code' in validationErrors) && name === 'code') {
      const validCodes = this.props.productItems.map((productItem) => productItem.item.code);
      selectedProductItem = this.props.productItems[validCodes.indexOf(value)];
    }

    this.setState({formData, validationErrors, selectedProductItem});
  }

  renderMessage() {
    const { validationErrors, selectedProductItem } = this.state;
    const { code, money } = this.state.formData;

    if (!this.canSubmit()) {
      const keys = Object.keys(validationErrors);
      if (keys.length > 0) {
        return (
          <div>
            <p>Please enter a code and money.</p>
            <ul>
              {keys.map((errorKey, i) => {
                return (
                  <li key={i}>{validationErrors[errorKey]}</li>
                );
              })}
            </ul>
          </div>
        );
      }

      return <p>This vending machine has delicious treats!</p>;
    }

    if (selectedProductItem === null) {
      return <p>No product selected!</p>;
    }

    return (
      <p>
        By clicking <strong>Order food</strong>,
        you will order item <strong>{selectedProductItem.item.name} ({code})</strong> with ${Number(money).toFixed(2)}.
      </p>
    );
  }

  render() {
    const { code, money } = this.state.formData;

    return (
      <div>
        <Alert bsStyle="info">
          <h4>Order from Vending Machine</h4>
          {this.renderMessage()}
        </Alert>
        <Form inline={true} onSubmit={(e) => this.onSubmit(e)}>
          <FormGroup>
            <ControlLabel>Code</ControlLabel>{' '}
            <FormControl
              name="code"
              type="text"
              value={code}
              placeholder="e.g. A1"
              onChange={(e) => this.onChange(e as any)}
            />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Money</ControlLabel>{' '}
            <FormControl
              name="money"
              type="text"
              value={money || ''}
              placeholder="e.g. 2.00"
              onChange={(e) => this.onChange(e as any)}
            />
          </FormGroup>{' '}
          <Button type="submit" disabled={!this.canSubmit()}>Order food</Button>{' '}
          <Button type="button" disabled={!this.canCancel()} onClick={() => this.onCancel()}>Cancel</Button>
        </Form>
      </div>
    );
  }
}
