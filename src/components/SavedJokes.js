import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteJokeAction, editJokeAction } from "../actions/jokesActions";
import oops from "../img/oops.png";
import TextArea from "./Modal/TextArea";

const SavedJokes = () => {
  const [jokeValue, setJokeValue] = useState("");
  const [text, setText] = useState(false);

  // get state from redux store
  const savedJokes = useSelector(state => state.savedJokes);
  const selectedJoke = useSelector(state => state.selectedJoke);

  // get dispatch
  const dispatch = useDispatch();
  // Set reference functions by wrapping action creators with dispatch
  const deleteJoke = jokeId => dispatch(deleteJokeAction(jokeId));
  const editJoke = jokeId => dispatch(editJokeAction(jokeId));

  // handle editing function
  const handleedit = id => {
    editJoke(id);
    setText(true);
  };

  const selected = selectedJoke.value;

  useEffect(() => {
    setJokeValue(selected);
  }, [text, selected]);

  const handleChange = e => {
    setJokeValue(e.target.value);
  };

  // loop through the saved jokes and display in the UI
  const jokeData = savedJokes.map(joke => (
    <li key={joke.id} className="list-group-item">
      {joke.categories.length ? (
        <h3>Joke category: {joke.categories}</h3>
      ) : (
        <h3>Joke category: Random</h3>
      )}
      <h5 className="mt-2">{joke.value}</h5>
      <i
        className="fas fa-edit  mt-3 mr-2 text-success"
        onClick={handleedit.bind(null, joke.id)}
        data-toggle="modal"
        data-target="#textModal"
      />

      <i
        className="fas fa-trash-alt mt-3  text-danger"
        onClick={deleteJoke.bind(null, joke.id)}
      />
    </li>
  ));

  return (
    <div className="jokes">
      <div className="dark-overlay jokes-inner text-light">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-4 text-dark"> Personal Zone</h1>
              <p className="lead text-dark">collection of saved jokes</p>
              <hr className="hr-ab" />
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center ">
        {savedJokes.length ? (
          <div className="pt-5 text-center">
            <div className="container bg-dark ">
              <div className="row ">
                <div className="col-md text-center ">
                  <ul className="list-group  ">{jokeData}</ul>
                </div>
              </div>{" "}
            </div>
          </div>
        ) : (
          <div>
            <h3>
              Oops,
              <img src={oops} alt="oops" /> no joke saved yet
            </h3>
            <p>Click on the save button with the joke to save a joke</p>
          </div>
        )}
      </div>

      <TextArea
        handleChange={handleChange}
        jokeValue={jokeValue}
        setText={setText}
      />
    </div>
  );
};

export default SavedJokes;
