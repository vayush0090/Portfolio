import React from 'react'
import project1 from '../../images/project1.png'

const ProjectCards = ({title,desc,project1,demoLink, codeLink}) => {
  return (
    <div className=' p-5 md:p-6 bg-[#0c0e19] w-80 rounded-xl shadow-xl '>
        <div className=''> <img className='p-2 md:p-4 md:w-80 md:h-40 sm:w-80 sm:h-40 w-80 h-40 ' src={project1} alt="" /></div>
        
        <h1 className='px-4 text-xl sm:text-xl md:text-2xl font-bold leading-normal'>{title}</h1>
        <p className=' text-xl sm:text-xl md:text-xl tracking-tight py-2 px-4'>{desc}</p>
        <div className='space-x-3 p-4'>
            <a href={demoLink} target="_blank" rel="noopener noreferrer"><button className=' text-sm bg-indigo-700 hover:bg-indigo-500 md:px-4 md:py-2 px-3 py-2 rounded-lg'>Demo</button></a>
            <a href={codeLink} target="_blank" rel="noopener noreferrer"><button className='text-sm bg-indigo-700 hover:bg-indigo-500 md:px-4 md:py-2 px-3 py-2 rounded-lg'>Code</button></a>
            
        </div>
    </div>
  )
}

export default ProjectCards