import React, { useState, useEffect } from "react";
import pic from "../../img/icons8-happy-50 (1).png";
import JokesDisplay from "./JokesDisplay";
import Spinner from "../../common/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  getRandomJokesAction,
  getCategoriesAction,
  setButtonNameAction,
  clearJokeAction,
  jokesByCatergoryAction,
  saveJokeAction
} from "../../actions/jokesActions";

const Jokes = () => {
  const [category, setCategory] = useState("");
  const [successMsg, setSuccessMsg] = useState(true);

  //get the state from store
  const jokesArr = useSelector(state => state.jokes);
  const categories = useSelector(state => state.categories);
  const loaded = useSelector(state => state.loaded);
  const random = useSelector(state => state.random);
  const loading = useSelector(state => state.loading);
  const control = useSelector(state => state.control);
  const error = useSelector(state => state.error);
  const joke = useSelector(state => state.joke);
  const savedJokes = useSelector(state => state.savedJokes);

  // get dispatch
  const dispatch = useDispatch();

  // Set reference functions by wrapping action creators with dispatch
  const getRandomJokes = () => dispatch(getRandomJokesAction());
  const jokesByCatergory = category =>
    dispatch(jokesByCatergoryAction(category));
  const controlButtonName = () => dispatch(setButtonNameAction());
  const clear = () => dispatch(clearJokeAction());
  const handleSave = joke => dispatch(saveJokeAction(joke));

  // get all the categories on load
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  // handle input change
  const handleChange = e => {
    setCategory(e.target.value);
  };

  // get jokes by category function
  const categorizedJokes = cat => {
    if (cat === "") {
      alert("Please select a category");
    } else {
      jokesByCatergory(cat);
    }
  };

  const jokeValueArr = savedJokes.map(data => data.value);

  // check to see if joke is already saved
  const validate = () => {
    let value = joke.value;
    if (jokeValueArr.includes(value)) {
      return true;
    } else {
      return false;
    }
  };

  // save joke function
  const saveJoke = joke => {
    let saved = validate();
    if (!saved) {
      handleSave(joke);
      setSuccessMsg(true);
    } else {
      setSuccessMsg(false);
      return false;
    }
  };

  // options for the catagories
  const options = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  // selection div
  const selection = (
    <div className="form-group pt-2 container ">
      <label> select a category</label>
      <select
        className="form-control form-control-sm "
        value={category}
        onChange={handleChange}
      >
        {options}
      </select>
      <div className="pt-2 text-center">
        <button
          className="btn btn-sm btn-primary  rounded-pill"
          onClick={categorizedJokes.bind(null, category)}
        >
          <i className="fas fa-search" /> search
        </button>
      </div>
    </div>
  );

  return (
    <div className="jokes" data-test="jokestest">
      <div className="dark-overlay jokes-inner text-light">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 text-dark">
                {" "}
                <img src={pic} alt="icon" />
                Facts Zone
                <img src={pic} alt="icon" />
              </h1>
              <p className="lead text-dark">
                Get Amazing jokes either randomly or by category
              </p>
              <hr className="hr-ab" />

              <button
                className="btn btn-sm btn-warning rounded-pill mr-3 "
                onClick={getRandomJokes}
              >
                <i className="fas fa-random" />{" "}
                {!loaded ? "Random jokes" : "Reload"}
              </button>
              <button
                className="btn btn-sm btn-primary  rounded-pill"
                onClick={controlButtonName}
              >
                <i className="fas fa-layer-group" /> Choose category
              </button>
            </div>
          </div>
        </div>
      </div>

      {jokesArr && random === true && !loading ? (
        <JokesDisplay
          jokesArr={jokesArr}
          clear={clear}
          categorizedJokes={categorizedJokes}
          getRandomJokes={getRandomJokes}
          control={control}
          error={error}
          saveJoke={saveJoke}
          category={category}
          successMsg={successMsg}
        />
      ) : null}
      {loading ? <Spinner /> : null}
      {random === false ? selection : null}
    </div>
  );
};

export default Jokes;
