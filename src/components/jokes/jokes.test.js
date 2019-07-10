import React from "react";
import { shallow } from "enzyme";
import Jokes from "./Jokes";
import JokesDisplay from "./JokesDisplay";
import { Provider } from "react-redux";
import store from "../../store";

describe("Jokes Components", () => {
  describe("Joke Component", () => {
    it("Should render without errors", () => {
      expect(
        shallow(
          <Provider store={store}>
            <Jokes />
          </Provider>
        ).contains(<Jokes />)
      ).toBe(true);
    });
  });

  describe("JokesDisplay component", () => {
    it("Should render without errors", () => {
      expect(
        shallow(
          <Provider store={store}>
            <JokesDisplay />
          </Provider>
        ).contains(<JokesDisplay />)
      ).toBe(true);
    });
  });
});
