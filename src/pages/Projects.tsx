import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import { allProjects } from '../interfaces/projects';
import restBg  from '../assets/rest-bg.jpg';
import quickBg from '../assets/quick-bg.jpg';
import todoBg from '../assets/todo-bg.jpg';
import rockBg from '../assets/rock-bg.jpg';
import brandBg from '../assets/brand-bg.jpg';
import morrowindBg from '../assets/morrowind-bg.jpg';
import snapBg from '../assets/snap-bg.jpg';
import tolaBg from '../assets/tola-bg.jpg';
import huddleBg from '../assets/huddle-bg.jpg';
import { useEffect, useState } from 'react';

export default function Projects () {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true),100)
  },[])

  return (
    <div className='project_container mt-10'>
      <header className='lg:flex lg:justify-end'>
        <div className='flex flex-col text-[3rem] sm:text-[4rem] sm:px-10 md:flex-row-reverse md:justify-between md:items-center md:mt-5 md:text-[5rem] lg:w-[80%] lg:text-[7rem]'>
          <svg className={`w-20 h-20
            sm:w-28 sm:h-28 
            lg:w-48 lg:h-48
            transition-all duration-700 ease-out transform
            ${visible ? "translate-y-0 opacity-100" : "translate-y-50 opacity-0"}`} 
            viewBox="0 0 24 24" fill="#00FF00" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4h7l2 2h9v14H3V4z"/>
          </svg>
          <motion.h1
            initial={{ opacity:0, y:20}}
            animate={{ opacity:1, y:0}}
            transition={{ duration: 0.8, ease:'easeOut'}}
            viewport={{once: true}}
            className='w-56 mt-4 leading-9 tracking-tighter text-left sm:leading-12 md:leading-15 md:mt-0 lg:leading-20'
          >
            Selected projects
          </motion.h1>
        </div>
      </header>
      <div className='header_project_info flex justify-between items-end mt-10 px-4 pb-10 border-b border-[var(--dark-green)] md:mt-20 md:px-15'>
        <motion.span
          initial={{opacity:0, y:600}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, ease:'easeOut'}}
          viewport={{once:true}}
          className='text-[4rem] md:text-[5.5rem] lg:text-[6.5rem]'
        >
          ↓
        </motion.span>
        <motion.p
          initial={{opacity:0, y:200}}
          animate={{opacity:1, y:0}}
          transition={{duration:1, ease:'easeOut'}}
          viewport={{once:true}}
          className='text-[1rem] text-right max-w-[23rem] md:text-[1.22rem]'
        >
          Every project in this section represents a milestone, crafted not just to function, but to teach me something new.
          From APIs to UI design, every commit was a lesson.
        </motion.p>
      </div>
      <motion.div
        initial={{opacity:0, y:300}}
        animate={{opacity:100, y:0}}
        transition={{duration: 1.5, ease:'easeOut'}}
        className='project_section grid grid-cols-1 sm:gap-5 lg:grid-cols-2 pt-2 md:px-5 md:pt-5'
      >
        <div className='border-b lg:col-span-2'>
          <Link to={allProjects[0].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center
              md:h-96 lg:h-[calc(70vh)]'
              style={{backgroundImage:`url(${restBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[0].imageUrl} alt=""
                className='w-4/6 z-1 lg:w-1/2
                '

              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[0].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[0].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b'>
          <Link to={allProjects[1].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(60vh)]'
              style={{backgroundImage:`url(${quickBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[1].imageUrl} alt=""
                className='w-4/6 z-1'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[1].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[1].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b'>
          <Link to={allProjects[2].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(60vh)]'
              style={{backgroundImage:`url(${todoBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[2].imageUrl} alt=""
                className='w-4/6 z-1'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[2].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[2].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b lg:col-span-2'>
          <Link to={allProjects[3].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(70vh)]'
              style={{backgroundImage:`url(${rockBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[3].imageUrl} alt=""
                className='w-4/6 z-1 lg:w-1/2'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[3].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[3].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b'>
          <Link to={allProjects[4].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(60vh)]'
              style={{backgroundImage:`url(${brandBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[4].imageUrl} alt=""
                className='w-4/6 z-1'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[4].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[4].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b'>
          <Link to={allProjects[5].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(60vh)]'
              style={{backgroundImage:`url(${morrowindBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[5].imageUrl} alt=""
                className='w-4/6 z-1'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[5].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[5].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b lg:col-span-2'>
          <Link to={allProjects[6].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(70vh)]'
              style={{backgroundImage:`url(${huddleBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[6].imageUrl} alt=""
                className='w-4/6 z-1 lg:w-1/2'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[6].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[6].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b'>
          <Link to={allProjects[8].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(60vh)]'
              style={{backgroundImage:`url(${snapBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[8].imageUrl} alt=""
                className='w-4/6 z-1'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[8].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[8].index}</span>
            </div>
          </Link>
        </div>
        <div className='border-b'>
          <Link to={allProjects[10].liveUrl}>
            <div
              className='relative flex justify-center items-center w-full h-72 overflow-hidden bg-cover bg-no-repeat bg-center md:h-96 lg:h-[calc(60vh)]'
              style={{backgroundImage:`url(${tolaBg})`}}
            >
              <div className='overlay absolute inset-0 bg-black/40 backdrop-brightness-105 z-0'></div>
              <img src={allProjects[10].imageUrl} alt=""
                className='w-4/6 z-1'
              />
            </div>
            <div className='flex items-center justify-between p-5 font-bold '>
              <h1>{allProjects[10].title.toUpperCase()}</h1>
              <span className='text-[1.5rem] md:text-[3rem]'>0{allProjects[10].index}</span>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
