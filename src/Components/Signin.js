import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import Weather from "./Weather";
export class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <div className="signin-left">
          <Weather />
        </div>
        <div className="signin-right">
          <Login />
        </div>
      </div>
    );
  }
}

export default Signin;
