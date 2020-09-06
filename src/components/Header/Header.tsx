import React from "react";
import "./Header.css";
import { HashRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <Router>
      <header className="header">
        <input id="menu" type="checkbox"></input>
        <label htmlFor="menu" className="open">
          ○
        </label>
        <label htmlFor="menu" className="back"></label>
        <aside>
          <label htmlFor="menu" className="close">
            ✖︎
          </label>
        </aside>
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
    </Router>
  );
};

export default Header;
