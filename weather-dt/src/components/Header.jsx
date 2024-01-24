import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-slate-400 divide-x-2 divide-black h-32 flex-row w-full items-center justify-center text-center'>
        <div className='w-full'>
            Current Conditions
        </div>
        <div className='w-full'>
            Forecast
        </div>
    </div>
  )
}

export default Header