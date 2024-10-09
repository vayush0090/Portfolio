import React, { useState } from 'react'

const Navbar = () => {
    const[menu,setMenu] = useState(false)
    const[showMenu,setShowMenu]= useState(true)
  return (
    <nav className='text-white flex justify-between items-center sm:flex md:flex sm:items-center md:items-center px-10 py-3'>
        <span className='text-3xl'>Portfolio</span>
        <ul className={`${ menu ? "block": "hidden"} flex  md:items-center space-x-5 md:flex`}>
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
        {showMenu
        ? 
            (
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            )
        : 
            (
                <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            )
        }
    </nav>
  )
}

export default Navbar