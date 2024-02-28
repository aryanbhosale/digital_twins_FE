import snowicon from "../assets/snowy.png";

const Header = ({ currentWeather, forecastWeather, setSelectedWeather }) => {
  return (
    <div className="flex divide-x-2 divide-gray-800 h-32 flex-row w-full items-center justify-center text-center sticky inset-x-0 top-0 z-30 border-b border-gray-700 bg-black/75 backdrop-blur-sm transition-all rounded-2xl">
      <div className="flex justify-center items-center text-center w-full h-full cursor-pointer hover:bg-gray-800 active:bg-slate-950 transition-all" onClick={() => setSelectedWeather(currentWeather)}>
        <div className="flex flex-row justify-around h-full w-full pt-5">
           
          <div className="flex flex-col justify-start">
          <div><h1 className="text-lg border border-gray-700"> Now</h1></div>
          <div>
            <p >2 degrees </p>
            <p>Feels like 1.5 degrees</p>
          </div>
          </div>
          <div className="flex flex-col justify-start">
           <p className="flex flex-row space-x-2 justify-center"><p>Heavy snow</p> <p><img src={snowicon} className="h-5 w-5"/></p></p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center w-full h-full cursor-pointer hover:bg-gray-800 active:bg-slate-950 transition-all" onClick={() => setSelectedWeather(forecastWeather)}>
        <div className="flex flex-row justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center text-center">
            <p>Forecast</p>
            <p>15 degrees *icons*</p>
            <p>Feels like 12 degrees</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p>Rain</p>
            <p>Precipitation: 70%</p>
            <p>Wind: 20km/h, medium</p>
            <p>Humidity: 85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header