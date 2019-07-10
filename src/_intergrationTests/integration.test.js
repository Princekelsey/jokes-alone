import moxios from "moxios";
import { testStore } from "../../utilities";
import {
  getRandomJokesAction,
  jokesByCatergoryAction,
  getCategoriesAction
} from "../actions/jokesActions";

// test for jokes by random action
describe("Get random jokes action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = {
      id: "1234",
      value: "joke value",
      icon_url: "http://hhffjfjfjfjfj"
    };

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(getRandomJokesAction()).then(() => {
      const newState = store.getState();
      expect(newState.joke).toBe(expectedState);
    });
  });
});

// test for jokes by category action
describe("Get catagorized jokes action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = {
      id: "1234",
      value: "joke value",
      icon_url: "http://hhffjfjfjfjfj",
      categories: ["animal"]
    };

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(jokesByCatergoryAction()).then(() => {
      const newState = store.getState();
      expect(newState.joke).toBe(expectedState);
    });
  });
});

// test to get all jokes categories action
describe("Get all jokes category", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = ["cateory 1", "cateory 2", "cateory 3", "cateory 4"];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    return store.dispatch(getCategoriesAction()).then(() => {
      const newState = store.getState();
      expect(newState.categories).toBe(expectedState);
    });
  });
});
