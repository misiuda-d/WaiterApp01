import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { initialState } from "./initialState";
import thunk from "redux-thunk";
import { tablesReducer } from "./tablesRedux";

const subreducers = {
  tables: tablesReducer,
};

const reducer = combineReducers(subreducers);

export const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
