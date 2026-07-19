import React from 'react'

function TracktionSection() {
    return (
        <div className='w-full' >
            <img src="section2.svg" className='absolute w-screen left-0 -z-10' alt="" />
            <div className='py-37.5 flex flex-col gap-12' >
                <span className='font-newsreader text-3xl' >Recognition</span>
                <h1 className='font-newsreader font-medium text-5xl' >India Ai Impact <span className='text-primary' >Summit</span> <br></br><span className='text-primary'>2026</span></h1>
                <div className='w-full' >
                    <p className='font-inter tracking-wide max-w-136.25 float-end'>ArogyaAI was selected among the Top 20 ventures nationwide (out of thousands of applicants) at the YUVAi Global Youth Challenge, and presented at the India AI Impact Summit 2026.</p>
                </div>
            </div>
            <div className='grid w-full grid-cols-1 gap-6.5 md:grid-cols-3' >
                <div className='group aspect-square cursor-pointer overflow-hidden rounded-[28px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5' >
                    <img src="photo1.png" className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105' alt="" />
                </div>
                <div className='group aspect-square cursor-pointer overflow-hidden rounded-[28px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5' >
                    <img src="photo2.png" className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105' alt="" />
                </div>
                <div className='group aspect-square cursor-pointer overflow-hidden rounded-[28px] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5' >
                    <img src="photo3.png" className='h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105' alt="" />
                </div>
            </div>
        </div>
    )
}

export default TracktionSection