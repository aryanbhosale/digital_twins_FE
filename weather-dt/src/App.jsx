import Header from "./components/Header";
import Render from "./components/Render";
import Parameters from "./components/Parameters";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState("Snow");
  const [forecastWeather, setForecastWeather] = useState("Rain");
  const [selectedWeather, setSelectedWeather] = useState(currentWeather);
  return (
    // main div container
    <div className="flex flex-col h-full w-full justify-center items-center bg-[#030712]">
      {/* Header Component Container */}
      <Header
        currentWeather={currentWeather}
        forecastWeather={forecastWeather}
        setSelectedWeather={setSelectedWeather}
      />
      {/* Main page below header container */}
      <div className="flex flex-row w-full justify-center items-center divide-x-2 divide-gray-800">
        {/* 3D renderer component */}
        <Render selectedWeather={selectedWeather} />
        {/* Parameter display component */}
        <Parameters />
      </div>
    </div>
  );
}

export default App;
