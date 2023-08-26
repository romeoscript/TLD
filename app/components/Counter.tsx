import React from 'react'

const Counter = () => {
  return (
    <div className='bg-[#F16232] flex justify-around items-center p-[4rem] my-[4rem]'>
        <div className='text-center p-[1rem]'>
            <h2 className='font-bold text-4xl my-[1rem]'>+1M</h2>
            <p>Data Points Analyzed</p>
        </div>
        <div className='text-center p-[1rem]'>
            <h2 className='font-bold text-4xl my-[1rem]'>2023</h2>
            <p>Founded</p>
        </div>
        <div className='text-center p-[1rem]'>
            <h1 className='font-bold text-4xl my-[1rem]'>500+</h1>
            <p>Verified Customers</p>
        </div>
    </div>
  )
}

export default Counter