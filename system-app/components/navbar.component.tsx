"use client"
import React from 'react'
import Button from './ui/button.ui.component'

function Navbar() {
  return (
    <div className='w-full py-2.5 flex flex-row items-center justify-between' >
        <div>
            <span className='font-syne font-bold text-2xl' >Arogya AI</span>
        </div>
        <nav>
            <ul className='flex flex-row items-center justify-between gap-10' >
                <li className='navItem' >Products</li>
                <li className='navItem' >About us</li>
                <li className='navItem' >Contact</li>
            </ul>
        </nav>
        <Button />
    </div>
  )
}

export default Navbar