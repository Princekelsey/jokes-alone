import { GET_RANDOM_JOKES } from "../actions/types";
import jokeReducer from "./jokeReducer";
import { initialState } from "./jokeReducer";

describe("Joke Reducer", () => {
  it("Should return default state ", () => {
    const newState = jokeReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state if received a type", () => {
    const joke = { id: "1234", value: "new joke" };
    const response = {
      ...initialState,
      jokes: [joke],
      joke: joke,
      random: true,
      loading: false,
      loaded: true,
      control: true,
      error: null
    };
    const newState = jokeReducer(undefined, {
      type: GET_RANDOM_JOKES,
      payload: joke
    });
    expect(newState).toEqual(response);
  });
});
