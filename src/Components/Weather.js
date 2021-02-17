import React, { Component } from "react";
import "../App.css";
import { WiDaySunnyOvercast } from "weather-icons-react";
import axios from "axios";
import History from "./History";
import Favourite from "./Favourite";
import { WiDaySunny } from "weather-icons-react";
import { WiCelsius } from "weather-icons-react";
import { WiHot } from "weather-icons-react";
import { WiCloudUp } from "weather-icons-react";
import { WiRaindrop } from "weather-icons-react";
let con = {
  backgroundImage:
    " url('https://ak.picdn.net/shutterstock/videos/1055450339/thumb/1.jpg?ip=x480')",
  backgroundSize: "100% 100%",
};
export class Weather extends Component {
  state = {
    city: "",
    humidity: "",
    pressure: "",
    temp: "",
    Description: "",
    Windspeed: "",
    deg: "",
    history: ["chennai", "mumbai", "delhi"],
    isfav: false,
    fav: ["chennai", "mumbai"],
    modalfav: false,
    modalhis: false,
    clas: "",
  };
  weather = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=778d409c897c1155d85e983e70d0757d`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          humidity: res.data.main.humidity,
          pressure: res.data.main.pressure,
          temp: res.data.main.temp,
          Description: res.data.weather[0].description,
          Windspeed: res.data.wind.speed,
          deg: res.data.wind.deg + 272,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getweather = () => {
    if (this.state.fav.length > 5 && this.state.isfav == true) {
      this.state.fav.splice(0, 1, this.state.city);
    } else {
      if (this.state.isfav == true) {
        this.state.fav.push(this.state.city);
        this.setState({
          isfav: false,
        });
      }
    }
    if (this.state.history.length > 5) {
      this.state.history.splice(0, 1, this.state.city);
    } else {
      this.state.history.push(this.state.city);
    }

    this.weather(this.state.city);
    console.log(this.state.history);
    console.log(this.state.fav);
  };
  onhis = () => {
    this.setState({
      modalhis: false,
    });
  };
  onfav = () => {
    this.setState({
      modalfav: false,
    });
  };
  render() {
    const mist = {
      backgroundImage:
        " url('https://wallpaperstock.net/wallpapers/thumbs1/44591wide.jpg')",
      backgroundSize: "cover",
    };
    const haze = {
      backgroundImage: " url('https://wallpapercave.com/wp/wp6225365.jpg')",
      backgroundSize: "cover",
    };
    const fog = {
      backgroundImage:
        " url('https://c4.wallpaperflare.com/wallpaper/877/5/294/long-road-lightning-road-storm-wallpaper-preview.jpg')",
      backgroundSize: "cover",
    };
    const clearsky = {
      backgroundImage: " url('https://wallpaperaccess.com/full/1540002.jpg')",
      backgroundSize: "cover",
    };
    const fewclouds = {
      backgroundImage: " url('https://wallpaperaccess.com/full/1540002.jpg')",
      backgroundSize: "cover",
    };
    const desc = React.createContext();
    const history = (
      <History
        val={this.state.history}
        modal={this.state.modalhis}
        tog={this.onhis}
      />
    );
    const fav = (
      <Favourite
        val={this.state.fav}
        modal={this.state.modalfav}
        tog={this.onfav}
      />
    );
    if (this.state.Description === "smoke") {
      con = fog;
    }
    if (this.state.Description === "mist") {
      con = mist;
    }
    if (this.state.Description === "haze") {
      con = fewclouds;
    }
    if (this.state.Description === "clear sky") {
      con = haze;
    }
    if (this.state.Description === "few clouds") {
      con = clearsky;
    }

    return (
      <div className="weather ">
        <div className="weather-head">
          <h2>
            {" "}
            <WiDaySunnyOvercast size={50} color="#FFD700" />
            Weather App
          </h2>
          <h1>{this.props.name}</h1>
          <h1></h1>
        </div>
        <div className="" style={con}>
          <div className="weather-search">
            <input
              type="text"
              onChange={(e) => {
                this.setState({
                  city: e.target.value,
                });
              }}
            />
          </div>
          <div className="Api-text">
            <WiRaindrop
              size={100}
              color="red"
              onClick={() => this.setState({ isfav: true })}
            />
            <button className="weather-button" onClick={this.getweather}>
              {" "}
              get weather
            </button>
            <button
              onClick={() => this.setState({ modalhis: true })}
              className="weather-his"
            >
              History
            </button>
            <button
              onClick={() => this.setState({ modalfav: true })}
              className="weather-fav"
            >
              Favourite
            </button>
          </div>
          <div className="Api-img">
            <div>{history}</div>
            <div>{fav}</div>
            <div className="Api-result">
              <table border="2px">
                <tr>
                  <td colSpan="3">
                    {" "}
                    <h1>{this.state.city}</h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>
                      Humditiy={this.state.humidity}
                      {<WiDaySunny size={50} color="#851478" />}
                    </h1>
                  </td>
                  <td>
                    {" "}
                    <h1>
                      Pressure={this.state.pressure}
                      <WiCloudUp size={50} color="#851478" />
                    </h1>
                  </td>
                  <td>
                    {" "}
                    <h1>
                      Windspeed={this.state.Windspeed}
                      <WiHot size={50} color="#851478" />
                    </h1>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1>
                      Description={this.state.Description}
                      <WiHot size={50} color="#851478" />
                    </h1>
                  </td>
                  <td>
                    <h1>
                      Deg={this.state.deg}
                      {<WiCelsius size={50} color="#851478" />}
                    </h1>
                  </td>
                  <td>
                    <h1>
                      Temp={this.state.temp}
                      <WiHot size={50} color="#851478" />
                    </h1>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
