import { combineReducers } from "redux";

// Reducers
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  gameReducer
});

export default rootReducer;
