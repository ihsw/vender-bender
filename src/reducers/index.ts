import { VenderBenderAction } from '../actions';
import { REFUND_CHANGE, ORDER_PRODUCT } from '../constants';
import { StoreState } from '../types';

export const vendors = (state: StoreState, action: VenderBenderAction): StoreState => {
  switch (action.type) {
    case REFUND_CHANGE:
      return {
        ...state,
        changeRefunded: action.amount,
        lastProductOrdered: null
      };
    case ORDER_PRODUCT:
      const { productItems } = state;
      productItems[action.code].quantity -= 1;

      return {
        ...state,
        productItems: {...productItems},
        lastProductOrdered: productItems[action.code],
        changeRefunded: null
      };
    default:
      return state;
  }
};
