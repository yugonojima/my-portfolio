import React from "react";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Thought from "./Thought/Thought";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Button from "react-bootstrap/Button";

const SwichButton = ({ route,color }) => {
  return (
    <>
      <Router>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Button variant={color} size="lg">
            {route}
          </Button>
        </Link>
        <Switch>
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

export default SwichButton;
