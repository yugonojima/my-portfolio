import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Home from "../Home/Home";
import { HashRouter as Router, Link, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import About from "../About/About";
import Thought from "../Thought/Thought";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

const Header = () => {
  return (
    <Router>
      <header className="header" >
        <div className="header-left">
          <a>JPN</a>
          <a>ENG</a>
        </div>

        <div className="header-right">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              TOP
            </Button>
          </Link>
          <Link to="/About" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              About
            </Button>
          </Link>
          <Link to="/Thought" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Thought
            </Button>
          </Link>
          <Link to="/Works" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Works
            </Button>
          </Link>
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Contact
            </Button>
          </Link>
        </div>
      </header>
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
  );
};

export default Header;
