'use client'

import {useState} from 'react';
import Image from 'next/image'
import styles from './page.module.css'

export default function page() {
  const [sideBar, setsideBar] = useState(false);

  return (
    <main id='container'>
      <section id='currentWeather'>
        <button id='btnSearch'>Search for places</button>
        {sideBar ==  true ? (
          <nav id='navBar'>
          </nav>
        ) : (
          ''
        )}
      </section>
      <section id='forecast'></section>
    </main>
    
  );
}
