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
  money: number | null;
  validationErrors: {[key: string]: string};
}

type Props = StateProps & DispatchProps & OwnProps;

export class ProductSelector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      code: '',
      money: 0,
      validationErrors: {}
    };
  }

  onSubmit(e: React.FormEvent<Form>) {
    e.preventDefault();

    alert('Ordering!');
  }

  canSubmit(): boolean {
    return this.state.code.length > 0
      && this.state.money !== null
      && this.state.money > 0;
  }

  setCode(e: React.ChangeEvent<HTMLInputElement>) {
    const code = e.target.value;
    if (code.length === 0) {
      this.setState({
        code,
        validationErrors: {
          ...this.state.validationErrors,
          'code': 'Code is not a valid code!'
        }
      });
    }

    this.setState({code: code});
  }

  setMoney(e: React.ChangeEvent<HTMLInputElement>) {
    let money: number | null = Number(e.target.value);
    if (isNaN(money)) {
      money = null;
      this.setState({
        money,
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
    if (!this.canSubmit()) {
      return <p>Please enter a code and money.</p>;
    }

    let { code, money, validationErrors } = this.state;

    const keys = Object.keys(validationErrors);
    if (keys.length > 0) {
      return (
        <ul>
          {keys.map((errorKey, i) => {
            return (
              <li key={i}>{validationErrors[errorKey]}</li>
            );
          })}
        </ul>
      );
    }

    if (money === null) {
      money = 0;
    }

    return (
      <p>By clicking <strong>Order</strong>, you will order item {code} with ${money.toFixed(2)}.</p>
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
