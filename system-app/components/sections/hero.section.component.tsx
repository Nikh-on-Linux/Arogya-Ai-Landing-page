"use client"
import React from 'react'

function HeroSection() {
  return (
    <div className='w-full pt-[48px] pb-[80px] flex flex-row items-center justify-center' >
        <div className='w-[50%] flex flex-col gap-3' >
            <h1 className='text-[52px] font-newsreader leading-14' >Assisting doctors through the consultation.</h1>
            <p className='text-lg leading-6 tracking-[3%]'>Arogya AI brings everything a doctor needs into one place, supporting them seamlessly through the entire consultation.
</p>
        </div>
        <div className='flex w-[40%] flex-row items-center justify-center' >
            <img src="hero.svg" className='w-fit'  alt="" />
        </div>
    </div>
  )
}

export default HeroSection