import { connect, Dispatch } from 'react-redux';

import { ProductSelector, StateProps, DispatchProps, OwnProps } from '../components/ProductSelector';
import { refundChange, orderProduct } from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
  const { productItems } = state;

  return {
    productItems
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<ProductSelector>): DispatchProps => {
  return {
    refundChange: (amount: number) => dispatch(refundChange(amount)),
    orderProduct: (code: string) => dispatch(orderProduct(code))
  };
};

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(ProductSelector);
