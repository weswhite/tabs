import React, { useState, useEffect } from 'react';

import HourlyWeather from './HourlyWeather'

function WeatherCard({location, coord}) {

  const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5051/forecast?lat=${coord.lat}&lon=${coord.lon}`, {
      mode: 'cors',
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
    .then(response => setWeather(response))
    .catch(error => console.error('Error:', error));
  }, [])

  return ( 
    <div>
      <h2>{location}</h2>
      {
        weather.currently ? 
        <div>Temperature: {weather.currently.temperature}, Rain: {weather.currently.precipProbability}</div> :
        null
      }
      {
        weather.hourly ?
        <HourlyWeather hourly={weather.hourly}/> :
        null
      }
    </div>  
  );
}
 
export default WeatherCard;