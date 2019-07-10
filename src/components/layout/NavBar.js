import React from "react";
import pic from "../../img/icons8-happy-50.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 "
      data-test="navBar-test"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={pic} alt="brand" />
          JOKER
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jokes">
                Jokes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/saved-jokes">
                Saved Jokes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
