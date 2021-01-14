import React, { useState } from "react";
import axios from "axios";
import Header from "./Header.js";
import Content from "./Content.js";
import Weathersearch from "./Weathersearch.js";
import WeatherData from "./WeatherData.js";
import Error from "./Error.js";
import DateTime from "./DateTime.js";
import Tagline from "./Tagline.js";
import Context from "../Context.js";

function Main() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  
  const api_call = async (e) => {
    e.preventDefault();
    const API_KEY = "8dadf533fa333ba111565f587dde2b66";
    const location=e.target.elements.location.value;
    if(!location) return setError("Please enter a city name"), setWeather(null);  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
    setCity(response.data.name);
    setError(null)
  
  };

  console.log(weather);
  return (
    <div className="main">
      <Header />
      <Content>
        
        <DateTime/>
        <Tagline/>
        <Context.Provider value={{api_call,weather,city}}>
        <Weathersearch  />
      {weather && <WeatherData />}  
      {error && <Error error={error} />}
        </Context.Provider>
    