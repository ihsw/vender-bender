import { VenderBenderAction } from '../actions';
import { REFUND_CHANGE } from '../constants';
import { StoreState } from '../types';

export const vendors = (state: StoreState, action: VenderBenderAction): StoreState => {
    switch (action.type) {
        case REFUND_CHANGE:
            return {
                ...state,
                changeRefunded: action.amount
            };
        default:
            return state;
    }
};
