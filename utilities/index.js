import { createStore, applyMiddleware } from "redux";
import jokeReducer from "../src/reducers/jokeReducer";
import { middleware } from "../src/store";

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(jokeReducer, initialState);
};
