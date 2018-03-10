import { connect, Dispatch } from 'react-redux';

import { ProductListing, StateProps, DispatchProps, OwnProps } from '../components/ProductListing';
import { restockProduct } from '../actions';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
    const { productItems } = state;
    return {
        productItems
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<ProductListing>): DispatchProps => {
    return {
        restockProduct: (code: string) => dispatch(restockProduct(code))
    };
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(ProductListing);
