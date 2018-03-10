import { connect, Dispatch } from 'react-redux';

import { DeliveredProductDisplay, StateProps, DispatchProps, OwnProps } from '../components/DeliveredProductDisplay';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
  const { lastProductOrdered } = state;

  return {
    lastProductOrdered
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<DeliveredProductDisplay>): DispatchProps => {
  return {};
};

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(DeliveredProductDisplay);
