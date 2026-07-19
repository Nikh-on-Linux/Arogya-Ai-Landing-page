"use client"
import React from 'react'

function FlowCard({leftAlign,imageurl,title,body}:{leftAlign:Boolean,imageurl:String,title:String,body:String}) {
  return (
    <div className={`${leftAlign ? "flex-row" : "flex-row-reverse"} w-full py-[55px] px-[28px] flex items-center gap-30 justify-between`} >
        <div className=' p-6 flex items-center justify-center texturebackground' >
            <img src={imageurl} className='rounded-2xl' alt="" />
        </div>
        <div className='w-[50%] flex flex-col gap-4 justify-center ' >
            <h2 className='font-newsreader text-4xl leading-9' >{title}</h2>
            <p className="font-inter text-[18px] tracking-wider leading-5.5 ">{body}</p>
        </div>
    </div>
  )
}

export default FlowCard