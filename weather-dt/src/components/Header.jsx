const Header = ({ currentWeather, forecastWeather, setSelectedWeather }) => {
  return (
    <div className="flex divide-x-2 divide-gray-800 h-32 flex-row w-full items-center justify-center text-center sticky inset-x-0 top-0 z-30 border-b border-gray-700 bg-black/75 backdrop-blur-sm transition-all rounded-2xl">
      <div className="flex justify-center items-center text-center w-full h-full cursor-pointer hover:bg-gray-800 active:bg-slate-950 transition-all" onClick={() => setSelectedWeather(currentWeather)}>
        <div className="flex flex-row justify-center items-center text-center">
          <div className="flex flex-col justify-center items-center text-center">
            <p>Now</p>
            <p>2 degrees *icons*</p>
            <p>Feels like 1.5 degrees</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p>Heavy snow</p>
            <p>Precipitation: 90%</p>
            <p>Wind: 30km/h, strong</p>
            <p>Humidity: 25%</p>
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