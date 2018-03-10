import { REFUND_CHANGE, ORDER_PRODUCT, RESTOCK_PRODUCT } from '../constants';

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
  amountProvided: number;
}

export const orderProduct = (code: string, amountProvided: number): OrderProductAction => {
  return {
    type: ORDER_PRODUCT,
    code,
    amountProvided
  };
};

export interface RestockProductAction {
  type: RESTOCK_PRODUCT;
  code: string;
}

export const restockProduct = (code: string): RestockProductAction => {
  return {
    type: RESTOCK_PRODUCT,
    code
  };
};

export type VenderBenderAction = RefundChangeAction
  | OrderProductAction
  | RestockProductAction;
