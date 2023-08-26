import React from 'react'
import bg from '../images/bg.png'

const Presence = () => {
  return (
    <div className='h-[60vh] relative flex items-center justify-center flex-col text-black '>
        <img src={bg.src} className='absolute top-0 left-0 h-full w-full object-cover ' alt="" />
        <h2 className='z-20 font-bold text-4xl'>Elevate Your Digital Presence With Us</h2>
        <p className='z-20 my-[4rem]'>Don’t wait any longer!</p>
        <button className="bg-[#F16232] rounded-md text-white px-[2rem] py-[0.5rem] z-20">Get Started</button>
    </div>
  )
}

export default Presence