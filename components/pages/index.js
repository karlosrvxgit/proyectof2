import React, { useState } from 'react';
// import WeatherCard from '/components/WeatherCard';


const IndexPage = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleGetWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=ea8d1197afcdcf7db5d10fa7a763caaf&&units=metric')
    // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=lima&appid=ea8d1197afcdcf7db5d10fa7a763caaf&&units=metric`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.error('Error fetching weather data:', error));
  };
  
  
  return (
    <div >
      <button id='pronostico' onClick={handleGetWeather}>pronostico</button>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default IndexPage;
