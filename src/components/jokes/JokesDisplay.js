import React from "react";
import oops from "../../img/oops.png";
import Success from "../Modal/Success";
import { useSelector } from "react-redux";

const JokesDisplay = ({
  jokesArr,
  clear,
  categorizedJokes,
  getRandomJokes,
  control,
  error,
  saveJoke,
  category,
  successMsg
}) => {
  const joked = useSelector(state => state.joke);
  const jokeData = jokesArr.map(joke => (
    <li key={joke.id} className="list-group-item">
      <h3>{control ? "Random joke" : `Joke category: ${joke.categories}`}</h3>
      <img src={joke.icon_url} alt="icon" />
      <h5 className="mt-2">{joke.value}</h5>
      <button
        type="button"
        className="btn btn-dark btn-sm mt-2  mr-3 rounded-pill"
        onClick={clear}
      >
        <i className="fas fa-eraser" /> Clear
      </button>
      <button
        type="button"
        className="btn btn-success btn-sm mt-2 mr-3 rounded-pill"
        onClick={saveJoke.bind(null, joked)}
        data-toggle="modal"
        data-target="#exampleModal"
      >
        <i className="fas fa-save " /> Save
      </button>
      {control ? (
        <button
          type="button"
          className="btn btn-primary btn-sm mt-2 rounded-pill"
          onClick={getRandomJokes}
        >
          <i className="fas fa-sync-alt" /> Refresh
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-primary btn-sm mt-2 rounded-pill"
          onClick={categorizedJokes.bind(null, category)}
        >
          <i className="fas fa-arrow-circle-right" /> Next
        </button>
      )}
    </li>
  ));
  return (
    <div>
      {jokesArr.length ? (
        <div className="pt-5 text-center" data-test="jokesdisplay-test">
          <div className="container bg-dark ">
            <div className="row ">
              <div className="col-md text-center ">
                <ul className="list-group  ">{jokeData}</ul>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : null}

      {error ? (
        <div className="text-center pt-4">
          {" "}
          <h3>
            Oops,
            <img src={oops} alt="oops" /> something went wrong while getting
            Chuk Norris facts
          </h3>
          <p>Please Try again</p>
        </div>
      ) : null}

      <Success successMsg={successMsg} />
    </div>
  );
};

export default JokesDisplay;
