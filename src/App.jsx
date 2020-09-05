import React from "react";
// import pageState from "./reducers/pageState";
// import AppContext from "./contexts/Appcontext";
import Header from "./components/Header/Header";
import About from "../src/components/About/About";
import Thought from "../src/components/Thought/Thought";
import Works from "../src/components/Works/Works";
import Contact from "../src/components/Contact/Contact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";

const App = () => {
  // const [state, dispatch] = useReducer(pageState, [
  //   true,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Thought">
            <Thought></Thought>
          </Route>
          <Route path="/Works">
            <Works></Works>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
