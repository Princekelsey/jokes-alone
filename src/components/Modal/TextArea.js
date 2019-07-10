import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJokeAction } from "../../actions/jokesActions";

const TextArea = ({ handleChange, jokeValue, setText }) => {
  const selectedJoke = useSelector(state => state.selectedJoke);

  // get dispatch
  const dispatch = useDispatch();
  // Set reference functions by wrapping action creators with dispatch
  const updateJoke = joke => dispatch(updateJokeAction(joke));

  // handle update method
  const handleUpdate = () => {
    setText(false);
    updateJoke({
      id: selectedJoke.id,
      value: jokeValue,
      categories: selectedJoke.categories
    });
  };

  // handle cancel update
  const handleCancelEdit = () => {
    setText(false);
    updateJoke({
      id: selectedJoke.id,
      value: selectedJoke.value,
      categories: selectedJoke.categories
    });
  };

  return (
    <div
      className="modal fade"
      id="textModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="textModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title " id="textModalLabel">
              Update Joke
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {" "}
            <div className="input-group container">
              <div className="input-group-prepend" />
              <textarea
                className="form-control"
                aria-label="With textarea"
                value={jokeValue}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-pill"
              data-dismiss="modal"
              onClick={handleCancelEdit}
            >
              Cancel update
            </button>
            <button
              type="button"
              data-dismiss="modal"
              className="btn btn-success btn-sm rounded-pill"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
