import {
  GET_RANDOM_JOKES,
  GET_CATEGORIZED_JOKES,
  GET_CATEGORIES,
  SAVE_JOKE,
  UPDATE_JOKE,
  SET_LOADING,
  DELETE_JOKE,
  EDIT_JOKE,
  CLEAR_JOKE,
  GET_ERROR,
  SET_BTN_NAME
} from "./types";
import axios from "axios";

// get random jokes action
export const getRandomJokesAction = () => async dispatch => {
  dispatch(setLoading());
  await axios
    .get("https://api.chucknorris.io/jokes/random")
    .then(res => {
      dispatch({
        type: GET_RANDOM_JOKES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
    });
};

// get jokes by category action
export const jokesByCatergoryAction = category => async dispatch => {
  dispatch(setLoading());
  await axios
    .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res => {
      dispatch({
        type: GET_CATEGORIZED_JOKES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
    });
};

// get all categories action
export const getCategoriesAction = () => async dispatch => {
  await axios
    .get("https://api.chucknorris.io/jokes/categories")
    .then(res => {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERROR,
        payload: err
      });
    });
};

export const setLoading = () => ({
  type: SET_LOADING
});

export const clearJokeAction = () => ({
  type: CLEAR_JOKE
});

export const saveJokeAction = joke => ({
  type: SAVE_JOKE,
  payload: joke
});

export const updateJokeAction = joke => ({
  type: UPDATE_JOKE,
  payload: joke
});

export const deleteJokeAction = jokeId => ({
  type: DELETE_JOKE,
  payload: jokeId
});

export const editJokeAction = jokeId => ({
  type: EDIT_JOKE,
  payload: jokeId
});

export const setButtonNameAction = () => ({
  type: SET_BTN_NAME
});
