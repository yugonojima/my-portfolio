import React, { useState } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import { HashRouter as Router, Link } from "react-router-dom";
import DehazeIcon from "@material-ui/icons/Dehaze";

const Header = () => {
  const [checked, setChecked] = useState(false);
  const removeChecked = () => {
    setChecked(false);
  };


  return (
    <div className="header">
      <div className="header-left">
        <label
          htmlFor="menu"
          className={checked ? "none-menu" : "open"}
          onClick={() => {
            setChecked(true);
          }}
        >
          <DehazeIcon style={{ fontSize: 40 }}></DehazeIcon>
        </label>
        {/* メニュー */}
        <div className={checked ? "menu-appear" : "menu-container"}>
          <div className="menus1">
            <label
              type="button"
              htmlFor="menu"
              className="close"
              onClick={() => setChecked(false)}
            >
              ✖︎
            </label>
            <div className="menus2">
              <Router>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="menu" onClick={removeChecked}>
                    TOP
                  </div>
                </Link>
                <Link to="About" style={{ textDecoration: "none" }}>
                  <div className="menu" onClick={removeChecked}>
                    About
                  </div>
                </Link>
                <Link to="Thought" style={{ textDecoration: "none" }}>
                  <div className="menu" onClick={removeChecked}>
                    Thought
                  </div>
                </Link>
                <Link to="Works" style={{ textDecoration: "none" }}>
                  <div className="menu" onClick={removeChecked}>
                    Works
                  </div>
                </Link>
                <Link to="Contact" style={{ textDecoration: "none" }}>
                  <div className="menu" onClick={removeChecked}>
                    Contact
                  </div>
                </Link>
                </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <Router>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              TOP
            </Button>
          </Link>
          <Link to="About" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              About
            </Button>
          </Link>
          <Link to="Thought" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Thought
            </Button>
          </Link>
          <Link to="Works" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Works
            </Button>
          </Link>
          <Link to="Contact" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary">
              Contact
            </Button>
          </Link>
          </Router>
      </div>
    </div>
  );
};

export default Header;
