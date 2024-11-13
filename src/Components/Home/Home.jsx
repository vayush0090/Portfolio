import React from 'react'
import picture from '../../images/pic1.png'

const Home = () => {
  return (
    <div className='text-white flex justify-between items-center  w-full sm:flex sm:justify-between sm:items-center md:flex md:justify-between md:items-center md:p-20 sm:px-10 px-10 py-5'>
        <div className='w-2/4 pt-10 '>
            <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold  lg:flex md:flex sm:flex flex tracking-tighter pb-1'>Hello , I am Ayush</h1>
            <p className='text-[10px] sm:text-xs md:text-xl lg:text-xl tracking-tight'> Creative Web Developer | Building modern, responsive apps with React.js & Tailwind CSS. Let's create impactful digital experiences together! </p>
            <a href="https://drive.google.com/file/d/1hSef3rMt3kJjY_WzK8iQ-nqYZzjy0PNn/view?usp=sharing" target="_blank"><button className=' mt-8 md:mt-10 hover:bg-purple-600 hover:scale-105 transition-all ease-in-out duration-200 bg-purple-700 md:px-4 md:py-3 sm:px-3 sm:py-2  sm:rounded-xl md:rounded-xl rounded-lg py-1 px-2 sm:font-medium md:font-semibold'>Download CV</button></a>
        </div>
        <div>
            <img className='w-40 lg:w-80 md:w-80 sm:w-56 rounded-full' src={picture} alt="" />
        </div>
    </div>
  )
}

export default Home