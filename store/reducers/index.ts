import { combineReducers } from "redux";
import counter from "./counter";
import { CounterState } from 'store/types/state';

export type RootState = {
    counter: CounterState
}

export default combineReducers({
    counter: counter
})