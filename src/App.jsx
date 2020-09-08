import React, { useState } from "react";
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
  const [checked, setChecked] = useState();
  
  
  return (
    <>
      <Header setChecked={setChecked} checked={checked}/>

      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home checked={checked}></Home>
          </Route>
          <Route path="/About">
            <About checked={checked}></About>
          </Route>
          <Route path="/Thought">
            <Thought checked={checked}></Thought>
          </Route>
          <Route path="/Works">
            <Works checked={checked}></Works>
          </Route>
          <Route path="/Contact">
            <Contact checked={checked}></Contact>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
