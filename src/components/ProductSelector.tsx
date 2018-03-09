import * as React from 'react';
import { Alert, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export interface StateProps {
}

export interface DispatchProps {
}

export interface OwnProps {
}

interface State {
  code: string;
  money: string;
  validationErrors: {[key: string]: string};
}

type Props = StateProps & DispatchProps & OwnProps;

export class ProductSelector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      code: '',
      money: '0',
      validationErrors: {}
    };
  }

  onSubmit(e: React.FormEvent<Form>) {
    e.preventDefault();

    alert('Ordering!');
  }

  canSubmit(): boolean {
    const money = Number(this.state.money);

    return this.state.code.length > 0
      && !isNaN(money)
      && money > 0;
  }

  setCode(e: React.ChangeEvent<HTMLInputElement>) {
    const code = e.target.value;
    if (code.length === 0) {
      this.setState({
        code,
        validationErrors: {
          ...this.state.validationErrors,
          'code': 'Code is blank!'
        }
      });
    }

    this.setState({code: code});
  }

  setMoney(e: React.ChangeEvent<HTMLInputElement>) {
    const money = e.target.value;
    if (isNaN(Number(money))) {
      this.setState({
        money: money,
        validationErrors: {
          ...this.state.validationErrors,
          'money': 'Money is not a valid number!'
        }
      });

      return;
    }

    const validationErrors = {...this.state.validationErrors};
    delete validationErrors['money'];
    this.setState({money, validationErrors});
  }

  renderMessage() {
    let { code, money, validationErrors } = this.state;

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

      return <p>Please enter a code and money.</p>;
    }

    return (
      <p>By clicking <strong>Order</strong>, you will order item {code} with ${Number(money).toFixed(2)}.</p>
    );
  }

  render() {
    const { code, money } = this.state;

    return (
      <div>
        <Alert bsStyle="info">
          <h4>Order Input</h4>
          {this.renderMessage()}
        </Alert>
        <Form inline={true} onSubmit={(e) => this.onSubmit(e)}>
          <FormGroup>
            <ControlLabel>Code</ControlLabel>{' '}
            <FormControl name="code" type="text" value={code} onChange={(e) => this.setCode(e as any)} />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Money</ControlLabel>{' '}
            <FormControl
              name="money"
              type="text"
              value={money || ''}
              onChange={(e) => this.setMoney(e as any)}
            />
          </FormGroup>{' '}
          <Button type="submit" disabled={!this.canSubmit()}>Order food</Button>
        </Form>
      </div>
    );
  }
}
