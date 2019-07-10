import React from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/layout/Landing";
import About from "./components/about/About";
import Jokes from "./components/jokes/Jokes";
import SavedJokes from "./components/SavedJokes";
import { Provider } from "react-redux";
import store from "./store";
import Success from "./components/Modal/Success";
import TextArea from "./components/Modal/TextArea";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/jokes" component={Jokes} />
          <Route exact path="/jokes" component={Success} />
          <Route exact path="/saved-jokes" component={SavedJokes} />
          <Route exact path="/saved-jokes" component={TextArea} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
