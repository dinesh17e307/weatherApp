import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Signin from "./Components/Signin";
import Weather from "./Components/Weather";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Weather />
      {/* <Signin /> */}
    </div>
  );
}

export default App;
