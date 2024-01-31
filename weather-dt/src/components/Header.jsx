import React from 'react'

const Header = ({ currentWeather, forecastWeather, selectedWeather, setSelectedWeather }) => {
  return (
    <div className='flex divide-x-2 divide-gray-800 h-32 flex-row w-full items-center justify-center text-center sticky inset-x-0 top-0 z-30 border-b border-gray-700 bg-black/75 backdrop-blur-sm transition-all rounded-2xl'>
        <div className='flex justify-center items-center text-center w-full h-full cursor-pointer' onClick={() => setSelectedWeather(currentWeather)}>
            Current Conditions
        </div>
        <div className='flex justify-center items-center text-center w-full h-full cursor-pointer' onClick={() => setSelectedWeather(forecastWeather)}>
            Forecast
        </div>
    </div>
  )
}

export default Header

