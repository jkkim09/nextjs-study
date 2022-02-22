import { combineReducers } from "redux";
import counter from "./counter";
import search from "./search";
import test from "./test"

const rootReducer = combineReducers({
    counter: counter,
    search: search,
    test: test
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>