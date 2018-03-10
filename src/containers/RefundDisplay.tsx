import { connect, Dispatch } from 'react-redux';

import { RefundDisplay, StateProps, DispatchProps, OwnProps } from '../components/RefundDisplay';
import { StoreState } from '../types';

export const mapStateToProps = (state: StoreState): StateProps => {
  const { changeRefunded } = state;

  return {
    changeRefunded
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<RefundDisplay>): DispatchProps => {
  return {};
};

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(RefundDisplay);
