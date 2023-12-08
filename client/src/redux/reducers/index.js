import { combineReducers } from "redux";

import auth from "./auth";
import stories from './stories';

export const reducers = combineReducers({
    auth, stories,
});