import React, { useState } from 'react'

const Navbar1 = () => {
    const[open,setOpen]=useState(false)

    const navList = (
        <ul className='py-2 lg:flex lg:gap-5 md:flex md:gap-3 sm:flex sm:gap-3 text-center'>
            <a href="#About">
                <li>About</li>
            </a>

            <a href="#Experience">
                <li>Experience</li>
            </a>

            <a href="#Projects">
                <li>Projects</li>
            </a>

            <a href="#Contact">
                <li>Contact</li>
            </a>
        </ul>
    )
  return (
    <div>
        <div className='main px-9 py-5 text-white lg:flex lg:justify-between lg:items-center md:flex md:justify-between md:items-center sm:flex sm:justify-between sm:items-center'>
            {/* left */}
            <div className='left'>
                <div className='flex items-center justify-between'>
                    {/* logo */}
                    <a href="/"><h1 className='text-3xl'>Portfolio</h1></a>
                    
                    {open?<button onClick={()=>setOpen(!open)} className='lg:hidden md:hidden sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                    </button>:<button onClick={()=>setOpen(!open)} className='lg:hidden md:hidden sm:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                    </button>}
                    
                    

                    


                </div>
            </div>
            {/* right desktop*/}
            <div className='right hidden lg:block md:block sm:block'>
                {navList}
            </div>

            {/* mobile navlist */}
            
            {open?<div className='mobile navList lg:hidden md:hidden sm:hidden'>
                {navList}
            </div>:""}
        </div>
    </div>
  )
}

export default Navbar1