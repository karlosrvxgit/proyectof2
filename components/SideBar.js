"use client";
import React from "react";
import "./sideBar.css";
import { useState } from "react";

export default function SideBar(props) {
  //Arreglo con todos los cursos.
  const country = [
    "London",
    "Barcelona",
    "Long Beach"
  ];
  //estado ayudarà a mostrar los paises filtrados
  const [search, setSearch] = useState(country);

  //funciòn que maneja el cambio en el input
  const handLeSearch = (event) => {
    //Guardo el texto del input
    let text = event.target.value;

    //creo un arreglo vacio para luego utilizarlo
    const filtered = [];

    //itero el arreglo con todos los paises y los filtro.
    country.forEach((element) => {
      //convierto a minùsculas los strings de los cursos. y
      //corroboro si incluye el texto del input.
      if (element.toLowerCase().includes(text)) {
        //guardo el elemento que coincida con la bùsqueda
        filtered.push(element);
      }
    });

    //Cambio el estado para mostrar los paises filtrados
    setSearch(filtered);
  };

  return (
    <nav id="navBar">
      <button id="btnClose" onClick={props.fun}>
        X
      </button>
      <div>
        <main>
          <div id="flex1">
            <section>
              <div id='mainsearch2'>
                <div id='mainsearch3'>
                <span className="material-symbols-outlined">
              search
              </span>
              <input placeholder="search location" id='input2' type="text"  onKeyUp={handLeSearch}  />
                </div>
              
              <button id='search2'>search</button>
              </div>
              
              <ul>
                {search.map((elemento, i) => (
                  <li key={i}>{elemento}</li>
                ))}
              </ul>
            </section>
            {/* <section id="img2">
              <img src="./funval.png" alt="" />
            </section> */}
          </div>
        </main>
      </div>
    </nav>
  );
}
