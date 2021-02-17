import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Login from "./Login";
import Weather from "./Weather";
export class Signin extends Component {
  render() {
    console.log(this.props.islog);
    return (
      <div className="signin">
        <div className="signin-left">
          {" "}
          <h1></h1>
        </div>
        <div className="signin-right">
          <Login log={this.props.islog} />
        </div>
      </div>
    );
  }
}

export default Signin;
