'use client'
import Image from 'next/image'
import styles from './SideBar.css'
import { useState } from 'react';
import React from 'react'


export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Perform the search using an API or any other method specific to your program.
    // For this example, we'll use a dummy search function that returns mock results.
    const results = await searchPlaces(searchQuery);

    // Update the search results state
    setSearchResults(results);
  };

  const searchPlaces = async (query) => {
    // Implement your search logic here, such as calling an API or querying a database.
    // For simplicity, we'll return a mock array of place names that match the query.

    // useEffect(() => {
    //     const getData = async () =>{
    //         const place = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea8d1197afcdcf7db5d10fa7a763caaf&units=metric`)
            
    //         if(place.ok == true) {
    //             const data = await place.json();
    //             setCurrent(data);
    //         }
    //     }
    
    //     getData();
    //   }, [city]);

    return places.filter((place) =>
      place.toLowerCase().includes(query.toLowerCase())
    );
  };


  return (
    <div>
    <input id='inputmain'
      type="text"
      placeholder="Search for places"
      // value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button id='buttons' onClick={handleSearch}>s</button>
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => <p key={result}>{result}</p>)
      ) : (
        <p></p>
      )}
    </div>
  </div>

    
  )
}
