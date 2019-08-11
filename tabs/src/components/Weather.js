import React, { useState, useEffect } from 'react';

function Weather() {

  const [weather, setWeather] = useState({})

  const location = {lat: '47.6062', lon: '-122.3321'}

  useEffect(() => {
    fetch(`http://localhost:5051/forecast?lat=${location.lat}&lon=${location.lon}`, {
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
    <div className="Weather">
      <pre>{JSON.stringify(weather, null, 2) }</pre>
    </div>
  );
}

export default Weather;
