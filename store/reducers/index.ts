import { combineReducers } from "redux";
import counter from "./counter";
import search from "./search";

export default combineReducers({
    counter: counter,
    search: search
})