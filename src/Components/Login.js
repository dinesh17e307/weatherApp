import React, { Component } from "react";
export class Login extends Component {
  render() {
    return (
      <div className="login">
        <form className="login-form">
          <h1>Weather App</h1>
          <table>
            <tr>
              <td>Name:</td>
              <td>
                {" "}
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>Password</td>
              <td>
                <input type="password" />
              </td>
            </tr>
            <tr></tr>
            <br></br>
            <tr>
              <td></td>
              <td>
                <button className="login-button">Log In</button>
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
