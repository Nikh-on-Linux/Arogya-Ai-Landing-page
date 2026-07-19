"use client"
import React from 'react'
import { ArrowUpRightIcon } from 'lucide-react'

function Button() {
  return (
    <button className='button cursor-pointer group inline-flex flex-row items-center justify-center gap-2 rounded-full border-none bg-secondary-background px-4.5 py-2.5 outline-none' >
        <div className='h-2 w-2 rounded-full bg-foreground transition-[opacity,transform,width] duration-300 ease-out group-hover:w-0 group-hover:opacity-0 group-hover:scale-75' ></div>
        <span className='z-10 select-none font-inter text-md font-medium transition-[transform,color] duration-300 ease-out group-hover:-translate-x-1 group-hover:text-secondary-background' >
          Apply for Pilot
        </span>
        <span className='grid w-0 place-items-center overflow-hidden text-background z-10 transition-[width] duration-300 ease-out group-hover:w-4' >
          <ArrowUpRightIcon className='h-4 w-4 shrink-0 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 starting:translate-y-100' />
        </span>
    </button>
  )
}

export default Button