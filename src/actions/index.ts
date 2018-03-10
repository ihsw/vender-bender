import { REFUND_CHANGE } from '../constants';

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

export type VenderBenderAction = RefundChangeAction;
