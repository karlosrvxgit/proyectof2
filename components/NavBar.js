"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Search from "./Search";
import moment from "moment-timezone";

import axios from "axios";
import IndexPage from "./pages";
import "./WeatherCard.css";

export default function NavBar() {
  const [sideBar, setSideBar] = useState(false);
  const [current, setCurrent] = useState();
  const [city, setCity] = useState("Huaraz");
  const [data, setData] = useState();
  const [forecast, setForecast] = useState([]);

  const KEY = "ea8d1197afcdcf7db5d10fa7a763caaf";
  const CITY = "Lima";

  const CURRENTAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;
  const FORECASTAPI = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${KEY}&units=metric`;

  const [locaTion, setLocation] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(CURRENTAPI);
      const json = await response.json();
      setData(json);
    }

    async function getData2() {
      const response = await fetch(FORECASTAPI);
      const json = await response.json();
      setForecast(json.list.slice(0, 5));
    }

    getData();
    getData2();
  }, []);



  function handleSideBar() {
    setSideBar(!sideBar);
  }

  //function location
  function handleLocation() {
    setLocation(!locaTion);
  }

  //images and time
  const handleClick = () => {
    if (name !== "") {
      // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ea8d1197afcdcf7db5d10fa7a763caaf&&units=metric`;
      axios.get(data);
      console
        .log(data)
        .then((res) => {
          let imagePath = "";
          if (res.data.weather[0].main == "Clouds") {
            imagePath = "./clouds2.png";
          } else if (res.data.weather[0].main == "Clear") {
            imagePath = "./clear2.png";
          } else if (res.data.weather[0].main == "Rain") {
            imagePath = "./rain2.png";
          } else if (res.data.weather[0].main == "Drizzle") {
            imagePath = "./rayo2.png";
          } else if (res.data.weather[0].main == "Mist") {
            imagePath = "./shower2.png";
          } else {
            imagePath = "./cloud2.png";
          }
          console.log(res.data);

          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  // return (

  return (
    <main id="container">
      <section id="currentWeather">
        {data && (
          <>
            <div id="navBar-btns">
              <span id="btnSearch" onClick={handleSideBar}>
                <Search />
              </span>
              <button className="btnLocation" onClick={handleClick}>
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
            <div id="navBar-img">
              <img className="clouds" src="./Cloudbg.png" alt="cloud" />
              <div>
                {/* <img src={data.image} width={100} alt='' /> */}
                <img className="sun" src="./Shower.png" alt="shower" />
              </div>
            </div>
            <div id="grados1">
              <div id="grados">
                <span>{data.main.temp.toFixed(0)}</span>
                {/* <span>15</span> */}
              </div>
              <div id="gradosc">
                <span>ºC</span>
              </div>
            </div>

            <div id="navBar-data">
              <p>{data.weather[0].main}</p>
              <p className="today">
                <span>Today</span>
                <span>.</span>
                <span>{moment.unix(data.dt).format("LL")}</span>
              </p>
              <p id="cityname">
                <div>
                  <p className="material-symbols-outlined">location_on</p>
                </div>
                <span>{data.name}</span>
              </p>

              <div>
                <div>
                  <div id="windmain1">
                    <div id="windmain">
                      <h5 id="status">Wind status</h5>
                      <p id="seven">{data.wind.speed}mph</p>
                      <div id="aguja">
                        <div id='agujax'>
                        <span class="material-symbols-outlined">
                          near_me
                          </span>
                          {/* <p>aguja</p> */}
                        </div>
                        <div>
                          <p id="agujal">wsw</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="humiditymain">
                  <div id="humidity1">
                    <h5 id="status">Humidity</h5>
                    <p id="seven">{data.main.humidity}%</p>
                    <div id="aguja">
                      <div id='barra'>
                        <p>=========</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="visibilitymain">
                  <div id="visibility1">
                    <h5 id="status">Visibility</h5>
                    <p id="seven">{data.visibility} miles</p>
                  </div>
                </div>

                <div id="pressuremain">
                  <div id="pressuremain1">
                    <h5 id="status">Air Pressure</h5>
                    <p id="seven">{data.main.pressure} mb</p>
                  </div>
                </div>

                <footer id='footer'>
                  <h6 >created by Carlos RV - devChallengest.io</h6>
                </footer>
              </div>
            </div>
          </>
        )}
        ,{sideBar == true ? <SideBar fun={handleSideBar} /> : ""}
        {locaTion == true ? <locaTion fun={handleLocation} /> : ""}
      </section>

      <section id="forecast">
        <div id="maingrados">
          <div>
            <h3 id="gradosC">ªC</h3>
          </div>
          <div>
            <h3 id="gradosF">ªF</h3>
          </div>
        </div>

        <div id="maincard">
          {forecast.map((item) => (
            <div key={item.dt} id="card">
              <div id="containerC">
                <h3 id="tomorrow">{moment(item.dt * 1000).format("ddd, HH:mm")}</h3>
                <div id="clear2img">
                  {/* {<img src="./Clear2.png" width={56.44} height={62} alt="" />}, */}
                </div>
                
                <div id="tminmax">
                  <p>{item.main.temp_min}</p>
                  <p>{item.main.temp_max}</p>
                </div>
                <img
                  src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                  alt={item.weather[0].description}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 id="letters">Today's Hightlights</h3>
        </div>
      </section>
    </main>
  );
}
