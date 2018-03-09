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

interface State {
  code: string;
  money: string;
  validationErrors: {[key: string]: string};
  selectedProductItem: ProductItem | null;
}

type Props = StateProps & DispatchProps & OwnProps;

export class ProductSelector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      code: '',
      money: '0',
      validationErrors: {},
      selectedProductItem: null
    };
  }

  onSubmit(e: React.FormEvent<Form>) {
    e.preventDefault();

    alert('Ordering!');
  }

  canSubmit(): boolean {
    return this.validateCode(this.state.code) === null
      && this.validateMoney(this.state.money) === null;
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

  setCode(e: React.ChangeEvent<HTMLInputElement>) {
    const validationErrors = this.state.validationErrors;
    const code = e.target.value;
    const error = this.validateCode(code);

    if (error !== null) {
      this.setState({
        code,
        validationErrors: {
          ...validationErrors,
          'code': error
        }
      });

      return;
    }

    const validCodes = this.props.productItems.map((productItem) => productItem.item.code);
    delete validationErrors['code'];

    this.setState({
      code,
      validationErrors,
      selectedProductItem: this.props.productItems[validCodes.indexOf(code)]
    });
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

  setMoney(e: React.ChangeEvent<HTMLInputElement>) {
    const validationErrors = this.state.validationErrors;
    const money = e.target.value;
    const error = this.validateMoney(money);

    if (error !== null) {
      this.setState({
        money,
        validationErrors: {
          ...validationErrors,
          'money': error
        }
      });

      return;
    }

    delete validationErrors['money'];

    this.setState({money, validationErrors});
  }

  renderMessage() {
    let { code, money, validationErrors, selectedProductItem } = this.state;

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
    const { code, money } = this.state;

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
              onChange={(e) => this.setCode(e as any)}
            />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Money</ControlLabel>{' '}
            <FormControl
              name="money"
              type="text"
              value={money || ''}
              placeholder="e.g. 2.00"
              onChange={(e) => this.setMoney(e as any)}
            />
          </FormGroup>{' '}
          <Button type="submit" disabled={!this.canSubmit()}>Order food</Button>
        </Form>
      </div>
    );
  }
}
