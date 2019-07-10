import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store";

describe("Application Components", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <App />
        </Provider>
      ).contains(<App />)
    ).toBe(true);
  });
});
