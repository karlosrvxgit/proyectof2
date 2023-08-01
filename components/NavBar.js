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

  const [locaTion, setLocation] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea8d1197afcdcf7db5d10fa7a763caaf&units=metric`
      );

      if (res.ok == true) {
        const data = await res.json();
        setCurrent(data);
      }
    };

    getData();
  }, [city]);

  console.log(current);

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
        {current && (
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
                <span>{current.main.temp.toFixed(0)}</span>
                {/* <span>15</span> */}
              </div>
              <div id="gradosc">
                <span>ºC</span>
              </div>
            </div>

            <div>{/* <Location /> */}</div>
            <div id="navBar-data">
              <p>{current.weather[0].main}</p>
              {/* <p>Shower</p> */}
              <p className="today">
                <span>Today</span>
                <span>.</span>
                <span>{moment.unix(current.dt).format("LL")}</span>
              </p>
              <p id="cityname">
                <div>
                  <p className="material-symbols-outlined">location_on</p>
                </div>
                <span>{current.name}</span>
              </p>
            </div>
          </>
        )}
        ,{sideBar == true ? <SideBar fun={handleSideBar} /> : ""}
        {locaTion == true ? <locaTion fun={handleLocation} /> : ""}
      </section>
      <section id="forecast">
        <IndexPage />
      </section>
    </main>
  );
}
