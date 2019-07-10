import {
  GET_RANDOM_JOKES,
  GET_CATEGORIZED_JOKES,
  GET_CATEGORIES,
  SET_LOADING,
  SAVE_JOKE,
  DELETE_JOKE,
  EDIT_JOKE,
  CLEAR_JOKE,
  GET_ERROR,
  SET_BTN_NAME,
  UPDATE_JOKE
} from "../actions/types";

export const initialState = {
  jokes: [],
  savedJokes: [],
  categories: [],
  joke: {},
  loading: false,
  loaded: false,
  control: false,
  error: null,
  random: true,
  editing: false,
  selectedJoke: {}
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_RANDOM_JOKES:
      return {
        ...state,
        jokes: [payload],
        joke: payload,
        random: true,
        loading: false,
        loaded: true,
        control: true,
        error: null
      };

    case GET_CATEGORIZED_JOKES:
      return {
        ...state,
        jokes: [payload],
        joke: payload,
        loading: false,
        random: true,
        control: false,
        error: null
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };

    case SAVE_JOKE:
      return {
        ...state,
        editing: false,
        savedJokes: [payload, ...state.savedJokes]
      };

    case CLEAR_JOKE:
      return {
        ...state,
        jokes: [],
        joke: {},
        error: null
      };

    case EDIT_JOKE:
      return {
        ...state,
        editing: true,
        selectedJoke: state.savedJokes.find(
          savedJoke => savedJoke.id === payload
        ),
        savedJokes: state.savedJokes.filter(
          savedJoke => savedJoke.id !== payload
        )
      };

    case UPDATE_JOKE:
      return {
        ...state,
        editing: false,
        savedJokes: [payload, ...state.savedJokes],
        selectedJoke: {}
      };

    case DELETE_JOKE:
      return {
        ...state,
        savedJokes: state.savedJokes.filter(
          savedJoke => savedJoke.id !== payload
        )
      };

    case GET_ERROR:
      return {
        ...state,
        error: payload,
        jokes: [],
        loading: false
      };

    case SET_BTN_NAME:
      return {
        ...state,
        loaded: false,
        random: false
      };

    default:
      return state;
  }
}
