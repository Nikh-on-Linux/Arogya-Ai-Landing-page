"use client"
import React from 'react'
import { Player } from '../ui/videoplayer.ui.component'
import DotGrid from '../ui/dotgrid.ui.component'

function WorkingSection() {
  return (
    <div className='w-full flex flex-col py-[120px] gap-26 relative' >
      <img src="section3.svg" className='absolute w-screen left-0' alt="" />
      <div className='flex flex-col gap-3' >
        <h2 className='font-newsreader text-4xl leading-9 font-medium text-center' >How It Works</h2>
        <p className='font-inter text-[18px] leading-6 text-center ' >Watch the video demonstration of  arogya Ai</p>
      </div>
      <div className='w-full flex items-center justify-center ' >
        <Player src='video.mp4' />
      </div>
    </div>
  )
}

export default WorkingSection