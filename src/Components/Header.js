import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
function Header() {
  return (
    <div>
      <Router>
        <div className="Navbar">
          <div className="Navbar-left">
            <div className="links">
              <a>home</a>
              <a>music</a>
              <a>contact us</a>
            </div>
          </div>
          <div className="Navbar-right"></div>
        </div>

        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default Header;
