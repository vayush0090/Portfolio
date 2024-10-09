import React from 'react'
import picture from '../../images/pic1.png'
import picture1 from '../../images/about.png'

const About = () => {
  return (
    <div id='About' className='text-white bg-black md:mx-20 sm:mx-20 mx-10 flex shadow-xl rounded-xl bg-opacity-30'>
        <div className='p-10'>
            <h2 className='text-4xl font-bold'> About</h2>
                <div className='lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center text-center '>
                <img className='md:h-80' src={picture1} alt="about image" />
                <ul>
                    <div className='md:flex  md:gap-3'>

                        <div className='md:space-y-3 space-y-2'>
                            <p className='text-xs md:text-xl'>I am a passionate and adaptable web developer with a strong foundation in HTML, CSS, JavaScript, React.js, Tailwind CSS, Java, and MySQL. My portfolio not only highlights my technical expertise but also showcases my creativity in solving complex challenges.</p>
                            <p className='text-xs md:text-xl'>Driven by a commitment to excellence, I actively seek opportunities to expand my knowledge and skills. Each project in my portfolio reflects my dedication to creating responsive and user-friendly applications that enhance the user experience.</p>
                            <p className='text-xs md:text-xl'>With a keen eye for detail and a love for innovation, I strive to push the boundaries of my capabilities. My portfolio serves as a dynamic representation of my growth and expertise, and I am excited about contributing to projects that make a meaningful impact in the tech world.</p>
                            <p className='text-xs md:text-xl'>Let's connect and explore how I can contribute to your team!</p>
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <div>
                            <h1 className='text-2xl leading-normal'>Frontend Developer</h1>
                            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quos neque quidem repellat? Explicabo quasi facilis, ipsam sint fugit cum.</p>
                        </div> */}

                    </div>
                    {/* <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <div>
                            <h1 className='text-2xl leading-normal'>Backend Developer</h1>
                            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quos neque quidem repellat? Explicabo quasi facilis, ipsam sint fugit cum.</p>
                        </div>

                    </div>
                    <div className='flex gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <div>
                            <h1 className='text-2xl leading-normal'>SQL Developer</h1>
                            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quos neque quidem repellat? Explicabo quasi facilis, ipsam sint fugit cum.</p>
                        </div>

                    </div> */}
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default About