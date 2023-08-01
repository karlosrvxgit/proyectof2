// import React, { useEffect, useState } from "react";
// import "./style.css";
// import axios from "axios";

// function Clima() {
//   const [data, setData] = useState({
//     celcius: 10,
//     name: 'Lima',
//     humidity: 10,

//     speed: 2,
//     image: '/Images/LightCloud2.png'


//   })
//   const [name, setName] = useState('');

//   // useEffect(() => {
   
//   // }, [])

//   const handleClick = () => {
//       if(name !== "") {
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ea8d1197afcdcf7db5d10fa7a763caaf&&units=metric`;
//         axios.get(apiUrl)
//         console.log(apiUrl)
//         .then(res => {
//           let imagePath = '';
//           if(res.data.weather[0].main == 'Clouds') {
//             imagePath = './clouds2.png'
//           } else if(res.data.weather[0].main == 'Clear') {
//             imagePath = './clear2.png'
//           } else if(res.data.weather[0].main == 'Rain') {
//             imagePath = './rain2.png'
//           } else if(res.data.weather[0].main == 'Drizzle') {
//             imagePath = './rayo2.png'
//           } else if(res.data.weather[0].main == 'Mist') {
//             imagePath = './shower2.png'
//           } else {
//             imagePath = './cloud2.png'
//           }
//           console.log(res.data);

//           setData({...data, celcius: res.data.main.temp, name: res.data.name,
//              humidity: res.data.main.humidity, speed: res.data.wind.speed,
//             image: imagePath
//             })
//         })
//         .catch(err => console.log(err));
//       }
//   }

//   return (
//     <div className="container">
//       <div className="weather">
//         <div className="search">
//           <input type="text" placeholder="Enter City Name onChange={e => setName()}" onChange={e => setName(e.target.value)} />
//           <button onClick={handleClick}>
//             <span className="material-symbols-outlined"  style={{'color':'red'}}>search</span>
//           </button>
//         </div>
//         <div className="winfo">
//             <img src={data.image} width={100} alt='' />
//             <h1>{Math.round(data.celcius)}ºC</h1>
//             <h2>{data.name}</h2>
//             <div className="details">
//                 <div className="col">
//                     <img src='/Images/humidity.jpeg' width={300}alt='' />
//                     <div className="humidity">
//                         <p>{Math.round(data.humidity)}%</p>
//                         <p>Humidity</p>
//                     </div>
//                 </div>
//                 <div className="col">
//                 <img src='/Images/wind.png'width={300} alt='' />
//                     <div className="wind">
//                         <p>{Math.round(data.speed)}</p>
//                         <p>Wind</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Clima;
