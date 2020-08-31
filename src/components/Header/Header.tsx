import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { HashRouter as Router, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <>
      <header className="header">
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              About
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Thought
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Works
            </Button>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Contact
            </Button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
