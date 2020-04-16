import React from "react";

const Weather = props => (
  <div className="infoWeath">
  { props.city &&
   <div>
   <p>City: {props.city}, {props.country}</p>
   <p>Temperature: {props.temp}</p>
   <p>Sunset: {props.sunset}</p>
   <p>Pressure: {props.pressure}</p>
   <p>Humidity: {props.humidity}</p>
   <p>Wind: {props.wind}</p>
   </div>
  }
  <p className="error">{props.error}</p>
  </div>
);

export default Weather;
