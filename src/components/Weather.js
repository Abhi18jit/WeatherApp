import React from 'react'
import '../index.css';

const Weather = ({tempInfo}) => {

    let date=new Date(tempInfo.sunset*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`;



  return (
    <>
      <section className="section h-[80vh] grid place-content-center ">
        <div className="card border-2 border-black flex flex-col gap-14 p-5 rounded-3xl">
            <div className="upper h-[20%] grid place-content-center text-5xl p-3">
            {tempInfo.name},{tempInfo.country}
            </div>
            <div className="middle h-[20%] flex">
                <div className="degree text-4xl p-3 bg-slate-200 text-slate-600">
                    {tempInfo.temp} deg
                </div>
                <div className="status text-3xl p-3 bg-slate-500 text-gray-200">
                    {tempInfo.weather} <br /> 
                </div>
                <div className="time text-3xl p-3 bg-slate-700 text-gray-300">
                    {new Date().toLocaleString()}
                </div>
            </div>
            <div className="lower h-[20%] flex justify-between">
                <div className="sunset flex gap-3 mx-2">
                    <div className="icon text-4xl">
                        🌅
                    </div>
                    <div className="details">
                        {timeStr} PM <br/> Sunset 
                    </div>
                </div>
                <div className="humidity flex gap-3">
                    <div className="icon text-4xl">
                        💧
                    </div>
                    <div className="details">
                        {tempInfo.humidity} <br /> Humidity
                    </div>
                </div>
                <div className="pressure flex gap-3 mx-2">
                    <div className="icon text-4xl">
                        🌧️
                    </div>
                    <div className="details">
                        {tempInfo.pressure}MM <br />Pressure
                    </div>
                </div>
                <div className="wind flex gap-3 mx-2">
                    <div className="icon text-4xl">
                        💨
                    </div>
                    <div className="details">
                        {tempInfo.speed} <br />Wind
                    </div>
                </div>
                
            </div>
        </div>
      </section>
    </>
  )
}

export default Weather
