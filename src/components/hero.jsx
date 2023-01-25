import React from 'react'

import './hero.css'

import Typed from 'react-typed'

import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div
        id='background-image'
        className='text-6xl md:text-7xl text-center max-w-[1240px] w-full h-screen mx-auto flex flex-col justify-center items-center gap-y-32'
        loading='lazy'
      >
        <Typed
          className='text-[#292020]'
          strings={['RIGID AUTO BRICKS', 'Quality Is Our Only Priority']}
          loop
          typeSpeed={40}
          backSpeed={60}
        />
        <button
          type='button'
          onClick={() => navigate('/gallery')}
          class='inline-block px-6 py-2.5 bg-[#464444] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#292020] hover:shadow-lg focus:bg-[#292020] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#292020] active:shadow-lg transition duration-150 ease-in-out'
        >
          Have A Look At Our Products
        </button>
      </div>
    </div>
  )
}

export default Hero
