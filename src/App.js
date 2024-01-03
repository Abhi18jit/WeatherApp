import React, { useState, useEffect } from 'react'
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";


const App = () => {


  const [searchedValue, setSearchedValue] = useState("Durgapur");
  const [tempInfo, setTempInfo] = useState({});
  const getSearchValue = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedValue}&units=metric&appid=e2c95c33dae6521cb8b32512bc48e4e7`;
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      const { temp, pressure, humidity } = data.main;
      const { name } = data;
      const { sunset,country } = data.sys;
      const { speed } = data.wind;
      const { main: weather } = data.weather[0];

      const weatherInfo = {
        temp, pressure, humidity, name, sunset, speed, weather,country
      }
      setTempInfo(weatherInfo);

    } catch (error) {
      console.log(error);
    }


  }
  useEffect(() => {
    getSearchValue();
  },[]);




  return (
    <>

      <Navbar getSearchValue={getSearchValue} searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
      <Weather tempInfo={tempInfo} />



    </>
  );
}

export default App;
