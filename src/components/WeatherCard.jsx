import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import axios from 'axios';

function WeatherCard() {
  const latitude = 11.0173096;
  const longitude = 76.9373021;
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          const data = response.data;
          setWeatherData(data); // Update state with fetched data
          setLoading(false); // Set loading to false
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchWeatherData(); // Fetch weather data when component mounts
  }, [latitude, longitude, API_KEY]);

  let result = {};
  if (weatherData) {
    result.info = weatherData.weather[0].main;
    result.curr_temp = Math.round(weatherData?.main.temp);
    result.iconLink = `https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`;
    result.temp_min = Math.round(weatherData.main.temp_min);
    result.temp_max = Math.round(weatherData.main.temp_max);
    result.visibility = Math.round((weatherData.visibility / 1000) * 100) / 100;
    result.wind = weatherData.wind.speed;
    result.humidity = weatherData.main.humidity;
  }


  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

  return (
    <div className="w-full bg-white p-4 rounded-sm border border-gray-200">
      <div className="flex flex-col bg-white rounded p-4 w-full ">
        <div className="font-bold text-xl">GCT Coimbatore</div>
        <div className="text-sm text-gray-500">{formattedDate}</div>
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
         
          <img src={result.iconLink} alt="Weather Icon" className="w-[80%]"/>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
          <div className="font-medium text-6xl">{result.curr_temp}°</div>
          <div className="flex flex-col items-center ml-6">
            <div>{result.info}</div>
            <div className="mt-1">
              <span className="text-sm">
                <i className="far fa-long-arrow-up"></i>
              </span>
              <span className="text-sm font-light text-gray-500">{result.temp_max}°C</span>
            </div>
            <div>
              <span className="text-sm">
                <i className="far fa-long-arrow-down"></i>
              </span>
              <span className="text-sm font-light text-gray-500">{result.temp_min}°C</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{result.wind}m/s</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{result.humidity}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{result.visibility}km</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
