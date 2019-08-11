import React, { useState, useEffect } from 'react';

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
      <pre>{ JSON.stringify(weather, null, 2) }</pre>
    </div>  
  );
}
 
export default WeatherCard;