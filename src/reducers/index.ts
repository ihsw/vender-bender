import { VenderBenderAction } from '../actions';
import { REFUND_CHANGE, ORDER_PRODUCT, RESTOCK_PRODUCT } from '../constants';
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
      return (() => {
        const { productItems } = state;
        const orderedProduct = productItems[action.code];
  
        orderedProduct.quantity -= 1;
        productItems[action.code] = orderedProduct;
  
        return {
          ...state,
          productItems: {...productItems},
          lastProductOrdered: productItems[action.code],
          changeRefunded: action.amountProvided - orderedProduct.item.price
        };
      })();
    case RESTOCK_PRODUCT:
      return (() => {
        const { productItems } = state;

        productItems[action.code].quantity += 10;
  
        return {
          ...state,
          productItems: {...productItems}
        };
      })();
    default:
      return state;
  }
};
