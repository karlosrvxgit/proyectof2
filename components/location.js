// 'use client'
// import React, { useState, useEffect } from "react";

// const WeatherCard = ({ weatherData }) => {
//   return (
//     <div className="weather-card">
//       <h2>{weatherData.name}</h2>
//       <p>{weatherData.weather[0].description}</p>
//       <p>Temperature: {weatherData.main.temp} °C</p>
//       <p>Humidity: {weatherData.main.humidity}%</p>
//     </div>
//   );
// };

// const Location = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const API_KEY = "ea8d1197afcdcf7db5d10fa7a763caaf";
//   const LOCATION = "HUARAZ"; // e.g., 'London,uk'

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${API_KEY}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   return (
//     <div>
//       <h1>Local Weather</h1>

      
//       {weatherData ? (
//         <WeatherCard weatherData={weatherData} />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Location;
