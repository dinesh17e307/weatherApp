import React, { Component } from "react";
import ContextApi from "./ContextApi";
export class Login extends Component {
  state = {
    islog: true,
    name: "",
    password: "",
  };

  render() {
    console.log(this.state);
    return (
      <div className="login">
        <form className="login-form">
          <h1>Weather App</h1>
          <table>
            <tr>
              <td>Name:</td>
              <td>
                {" "}
                <input
                  type="text"
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input
                  type="password"
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                />
              </td>
            </tr>
            <tr></tr>
            <br></br>
            <tr>
              <td></td>
              <td>
                <button
                  onClick={() => this.props.log(this.state)}
                  className="login-button"
                >
                  Log In
                </button>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                For sign up? <a href="">Click here</a>{" "}
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default Login;
