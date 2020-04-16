import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "e2d76e20f25d238491f64a5e8e71fbc2";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    humidity: undefined,
    wind: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      console.log(data);

      this.setState({
       temp: data.main.temp,
       city: data.name,
       country: data.sys.country,
       sunset: sunset_date,
       pressure: data.main.pressure,
       humidity: data.main.humidity,
       wind: data.wind.speed,
       error: undefined
    });
  } else {
    this.setState({
      temp: undefined,
      city: undefined,
      country: undefined,
      pressure: undefined,
      sunset: undefined,
      humidity: undefined,
      wind: undefined,
      error: "Enter the city"
    });
  }
  }

  render() {
    return (
      <div className="wrapper">
      <h1 className="kir">by Kir Matiash</h1>
      <div className="main">
      <div className="container">
      <div className="row">
      <div className="col-sm-5 info">
        <Info />
        </div>
        <div className="col-sm-7 form">
         <Form weatherMethod={this.gettingWeather} />
         <Weather
         temp={this.state.temp}
         city={this.state.city}
         country={this.state.country}
         sunset={this.state.sunset}
         pressure={this.state.pressure}
         humidity={this.state.humidity}
         wind={this.state.wind}
         error={this.state.error}
         />
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
