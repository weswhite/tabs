import React, { useState, useEffect } from 'react';

import WeatherCard from './WeatherCard'

function Weather() {

  const seattle = {lat: '47.6062', lon: '-122.3321'}
  const forks = {lat: '47.9504', lon: '-124.3855'}
  const northBend = {lat: '47.4957', lon: '-121.7868'}
  const bellingham = {lat: '48.7519', lon: '-122.4787'}

  return (
    <>
      <WeatherCard location={'Seattle'} coord={seattle} />
      <WeatherCard location={'Forks'} coord={forks} />
      <WeatherCard location={'North Bend'} coord={northBend} />
      <WeatherCard location={'Bellingham'} coord={bellingham} />
    </>
  );
}

export default Weather;
