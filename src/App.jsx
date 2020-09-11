import React from "react";
import Header from "./components/Header/Header";
import About from "../src/components/About/About";
import Thought from "../src/components/Thought/Thought";
import Works from "../src/components/Works/Works";
import Contact from "../src/components/Contact/Contact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />

      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Thought">
              <Thought />
            </Route>
            <Route path="/Works">
              <Works />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
};

export default App;
