import React from 'react'
import ProjectCards from './ProjectCards'
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'

const Projects = () => {
  return (
    <div id='Projects' className='mx-10 md:mx-20 pt-10 text-white'>
        <h1 className='lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold'>Projects</h1>
        <div className=' md:py-12 md:px-8 py-8 px-5  gap-3  flex justify-center  flex-wrap md:flex md:justify-center  md:gap-2'>
            <ProjectCards project1={project2} title="FOOD RECIPE" desc="React, JSX, CSS, JavaScript (ES6+), APIs" demoLink="https://foodrecipe-topaz.vercel.app/" codeLink="https://github.com/vayush0090/foodrecipe" />
            <ProjectCards project1={project1} title="Netfliex Clone" desc=" HTML, CSS" demoLink="https://netflixclone-kappa-eight.vercel.app/" codeLink="https://github.com/vayush0090/Netflixclone" />
            <ProjectCards project1={project3} title=" MovieZone" desc="React, JSX, CSS, JavaScript (ES6+)" demoLink="https://reactapp-eight-xi.vercel.app/" codeLink="https://github.com/vayush0090/reactapp" />
        </div>
        
    </div>
  )
}

export default Projects