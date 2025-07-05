import React from "react";
import photo from "../assets/dan-web.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  return(
    <section className="mt-20 px-5">
      <div className="px-8 text-5xl leading-12 tracking-tighter lg:flex lg:items-end lg:justify-evenly lg:m-auto lg:w-[calc(70vw)] lg:text-[calc(5vw)]">
        <span className="hidden text-8xl lg:block lg:mr-50">↓</span>
        <div>
          <motion.h1
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.7, ease:'easeOut'}}
            className="text-[var(--dark-green)] text-left"
          >
            Hello, I am Daniel.
          </motion.h1>

          <motion.h1
            initial={{opacity:0, y:200}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1, ease:'easeOut'}}
            className="mt-5 text-[var(white)] text-left"
          >
            A <span className="border-b border-dashed">frontend</span> <span className="border-b border-dashed">developer</span> with passion for crafting <span className="border-b border-dashed">reponsive</span> <span className="border-b border-dashed">interfaces</span>.
          </motion.h1>
        </div>
      </div>
      <div className="mt-30 text-lg md:px-10">
        <div className="lg:flex lg:justify-between lg:items-center">
          <img className="w-3/4 m-auto md:w-3/5 lg:w-[25rem]" src={photo} alt="Photo of myself sitting looking away"/>
          <div className="flex flex-col mt-20 text-left tracking-tighter leading-7 lg:m-0 lg:w-[calc(50vw)] lg:leading-10">
            <span className="text-left">/ ABOUT ME</span>
            <p className="mt-10">
              I'm a frontend developer currently pursuing a degree in Software Engineerging,
              with over 3 years of hands-on experience building websites <span className="text-[var(--green-phosphor)]">-- from personal projects to freelance collaborations.</span>
            </p>
            <p>
              As a kid born in the mid-90's, I spent countless hours tinkering with early websites, customizing 
              desktop environments, and exploring what computers coulb become <span className="text-[var(--green-phosphor)]">-- often guided by pure curiosity --</span> and love for creating. 
            </p>
            <p>
              Although my path temporarily led me to study Veterinary Medicine due to my deep care for animals, I 
              eventually found my way back to what had always resonated with me: <span className="border-b border-dashed border-[var(--green-phosphor)]">programming</span>. I'm especially drawn to 
              the final and visible layer of software <span className="text-[var(--green-phosphor)]">-- where logic meets desing --</span> and where I get to 
              express ideas through meaningful, responsive, and visually engaging user interfaces.
            </p>
            <p>
              Outside work, I enjoy spending time with my family, who are the foundations of nearly everything I strive for. 
              Their presence gives me motivation, responsibility, and the drive to grow professionally. I also enjoy reading, 
              playing games, and experimenting with web interfaces <span className="text-[var(--green-phosphor)]">-- even if just for fun.</span>
            </p>

            <p>
              I find inspiration in small, meaningful experiencies <span className="text-[var(--green-phosphor)]">-- and I aim to translate that into the websites I build.</span>
            </p>
          </div>
        </div>
        <div className="relative flex flex-col mt-50 text-left lg:flex-row">
          <span className="absolute -top-8 text-base text-[var(--dark-green)]">/ SKILLSET</span>
            <h2 className="w-[calc(50vw)] mt-5 text-2xl tracking-tighter  sm:text-4xl lg:text-6xl">My skills and interests</h2>
          <div className="lg:w-[calc(50vw)] lg:leading-10">
            <p className="mt-8">My motivation comes from the constant challenge of adapting my skills, workflows, and problem-solving mindset to meet each client's evolving needs</p>
            <p>
              I considere myself an adaptable developer with a strong desire for continuous growth. I strive to bring real value to the teams I colaborate with 
              <span className="text-[var(--green-phosphor)]"> -- not just through code, but also through attitude, clear communication, and a strong sense of responsability.</span>
            </p>
            <ul className="custom-marker mt-10  px-3 text-xl list-square list-inside sm:pl-10">
              <li className="custom-marker">Responsive UI development</li>
              <li className="custom-marker">Frontend architecture</li>
              <li className="custom-marker">Component-based design</li>
              <li className="custom-marker">Modern CSS tooling</li>
              <li className="custom-marker">Interactive animations</li>
              <li className="custom-marker">UX-focused layout and interaction</li>
              <li className="custom-marker">API integrations / UI data rendering</li>
              <li className="custom-marker">Desing-to-code translation</li>
            </ul>
          </div>
        </div>
        <div className="relative mt-50 pb-30 text-left lg:flex lg:pb-60">
          <span className="absolute -top-10 text-base text-[var(--dark-green)]">/ PROFESSIONAL EXPERIENCE</span>
          <div>
            <h1 className="w-[calc(50vw)] mt-5 mb-6 text-2xl tracking-tighter  sm:text-4xl lg:text-6xl">My work experience</h1>
            <Link className="ml-5 p-1 border" to="/">VIEW LINKEDIN ↱</Link>
          </div>
          <div className="mt-10 lg:w-[calc(50vw)]">
            <div className="flex justify-between items-center">
              <h1>Frontend developer - <span className="text-[var(--green-phosphor)]">Freelance Projects</span></h1>
              <span className="text-[var(--dark-green)]">2022 - NOW</span>
            </div>
            <div className="mt-10 flex justify-between items-center">
              <h1>Frontend Developer - <span className="text-[var(--green-phosphor)]">Livewick / Outline CC</span></h1>
              <span className="text-[var(--dark-green)]">2021 - Now (Collab)</span>
            </div>
            <div className="mt-10 flex justify-between items-center">
              <h1>Administrative Support - <span className="text-[var(--green-phosphor)]">DFC Aceros</span></h1>
              <span className="text-[var(--dark-green)]">2018 - Now</span>
            </div>
            <div className="mt-10 flex justify-between items-center">
              <h1>Veterinarian - <span className="text-[var(--green-phosphor)]">Genesis Hospital Veterinario</span></h1>
              <span className="text-[var(--dark-green)]">2016 - 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
