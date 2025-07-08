import ProjectCarousel from "../components/ProjectCarousel";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-[100vh] mt-12 lg:mt-20">
      <div className="hero_container flex flex-col text-[2.5rem] leading-9 text-left font-bold p-3 sm:ml-10 md:text-[3rem] md:leading-10 lg:ml-64 lg:text-[3.8rem] lg:leading-14">
        <div className="relative flex">
          <motion.h2
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.4, ease:'easeOut'}}
            viewport={{once: true}}
            className="z-20"
          >
            Developer,
          </motion.h2>

          <motion.span
            initial={{opacity: 0, x:-50}}
            whileInView={{opacity: 1, x:0}}
            whileHover={{rotate: 40}}
            transition={{duration: 0.3}}
            viewport={{once: false}}
            className="flex justify-center items-center absolute left-44 bottom-5 text-[1.2rem] -rotate-18 w-20 h-8 bg-[var(--dark-green)] z-10 
              md:bottom-7 md:left-56
              lg:bottom-10 lg:left-64 lg:w-28 lg:h-12 lg:text-[2rem]"
          >
            WEB
          </motion.span>
        </div>
        <div className="flex relative">
          <motion.h2
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.6, ease:'easeOut'}}
            viewport={{once: true}}
            className="z-20"
          >
            frontend artisan,
          </motion.h2>
        </div>
        <div className="flex relative">
          <motion.h2
            initial={{opacity: 0, y:50}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.8, ease:'easeOut'}}
            viewport={{once: true}}
            className="flex"
          >
            api whisperer.
          </motion.h2>
        </div>
      </div>
      <div className="announcements mt-3 pl-2 text-left md:pl-4">
        <span>AVAILABLE FOR WORK</span>
      </div>
      <ProjectCarousel/>
    </div>
  )
}
