import {INCREASE, DECREASE} from './actionTypes';

// export interface IncreaseAction {
//     type: typeof INCREASE
// }

// export interface DecreaseAction {
//     type: typeof DECREASE
// }

export const countUp = () => {
    return {
        type: INCREASE
    }
}

export const countDown = () => {
    return {
        type: DECREASE
    }
}