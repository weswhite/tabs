import React from 'react';

const HourlyWeather = ({hourly}) => {
  return ( 
    <>
      <div>{hourly.summary}</div>
      { hourly.data.map(h => 
          <span><b>{h.temperature}</b>, {h.precipProbability}; </span>
      ).filter((v, i) => i < 8 )}
    </>
   );
}
 
export default HourlyWeather;