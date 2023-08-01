import React from 'react'
import moment from 'moment-timezone';

const WeatherCard = ({ weatherData }) => {
    return (
      <div id='containerC'>
        <h2 id='tomorrow'>Tomorrow</h2>
        <div id='clear2img'>
        <img src="./Clear2.png" width={56.44} height={62} alt="" />
        </div>
        <div id='tminmax'>
        <p>{weatherData.main.temp_min}</p>
        <p>{weatherData.main.temp_max}</p>
        </div>
        
        
      </div>
    );
  };
  
  export default WeatherCard;
  