import { combineReducers } from "redux";
import counter from "./counter";
import search from "./search";

const rootReducer = combineReducers({
    counter: counter,
    search: search
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>