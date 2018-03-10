import { REFUND_CHANGE, ORDER_PRODUCT } from '../constants';

export interface RefundChangeAction {
  type: REFUND_CHANGE;
  amount: number;
}

export const refundChange = (amount: number): RefundChangeAction => {
  return {
    type: REFUND_CHANGE,
    amount
  };
};

export interface OrderProductAction {
  type: ORDER_PRODUCT;
  code: string;
}

export const orderProduct = (code: string): OrderProductAction => {
  return {
    type: ORDER_PRODUCT,
    code
  };
};

export type VenderBenderAction = RefundChangeAction
  | OrderProductAction;
