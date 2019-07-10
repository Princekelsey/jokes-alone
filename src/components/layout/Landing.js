import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing" data-test="landinPage">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 text-dark">Jokes Alone</h1>
              <p className="lead text-info">Chuk Norris Facts</p>
              <hr className="" />

              <Link
                to="/jokes"
                className="btn btn-sm btn-warning rounded-pill mr-3 "
                data-test="btn-test"
              >
                <i className="far fa-smile-wink" /> Jokes
              </Link>
              <Link
                to="/about"
                className="btn btn-sm btn-primary rounded-pill "
                data-test="btn-test"
              >
                <i className="fas fa-info-circle" /> About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
