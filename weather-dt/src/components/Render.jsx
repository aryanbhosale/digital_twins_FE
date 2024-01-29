import React from 'react';
import Snow from '../assets/snow.gif';

const Render = () => {
  return (
    <div className='w-9/12 flex h-screen items-center text-center justify-center'>
        <img src={Snow} alt="Snow" className='w-full h-full' />
    </div>
  )
}

export default Render