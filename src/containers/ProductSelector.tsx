import { connect, Dispatch } from 'react-redux';

import { ProductSelector, StateProps, DispatchProps, OwnProps } from '../components/ProductSelector';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
    return {};
};

export const mapDispatchToProps = (dispatch: Dispatch<ProductSelector>): DispatchProps => {
    return {};
};

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(ProductSelector);
