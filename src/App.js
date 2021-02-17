import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Signin from "./Components/Signin";
import Weather from "./Components/Weather";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ContextApi from "./Components/ContextApi";
class App extends React.Component {
  state = {
    islog: false,
    name: "",
    pass: "",
  };
  loghandle = (e) => {
    this.setState({
      islog: e.islog,
      name: e.name,
      pass: e.password,
    });
  };
  render() {
    console.log(this.state);
    const islog = this.state.islog;
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <Weather /> */}
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              render={() =>
                !islog ? (
                  <Signin islog={this.loghandle} />
                ) : (
                  <Weather name={this.state.name} />
                )
              }
            />
            <Link exact to="/weather" component={Weather} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
