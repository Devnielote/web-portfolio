import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer () {
  return (
    <footer className="">
      <div className="footer_navigation hidden md:text-xl md:block md:px-3 md:pt-2 md:mt-2 md:pl-10 lg:flex lg:w-2/3 lg:justify-evenly lg:items-start">
        <div className="reach_me flex flex-col text-left"> 
          <span>/CONTACT ME</span>
          <div className="">
            <Link to="mailto:contact@danielflores.dev?subject=Let's%20work%20together!">contact@danielflores.dev</Link>
          </div>
        </div>
        <div className="socials flex flex-col text-left mt-4 lg:ml-20 lg:mt-0">
          <div className="footer_links flex-col mt-4 lg:mt-0">
            <span>/NAVIGATE TO</span>
            <Link to="/" className="flex mt-2">Home</Link>
            <Link to="/projects" className="flex">Selected projects</Link>
            <Link to="/about" className="flex">About</Link>
          </div>
        </div>
        <div className="flex flex-col mt-4 text-left lg:ml-20 lg:mt-0">
          <span>/STALK ME</span>
          <Link className="flex w-auto mt-2" to="https://www.linkedin.com/in/danielfloca/">Linkedin</Link>
          <Link className="flex" to="https://github.com/Devnielote">Github</Link>
          <Link className="flex" to="Daniel_Flores_CV_EN.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
        </div>
      </div>
      <div className="hidden md:block md:mt-20 md:pl-10">
        <Link to="/contact" className="flex text-left">
          <motion.h1
            initial={{opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y:0 }}
            transition={{ duration: 0.8, ease:'easeOut'}}
            viewport={{once:false}}
            className="text-7xl tracking-tighter lg:text-9xl"
          >
            Let's create together ----
          </motion.h1>
        </Link>
      </div>
      <div className="footer_mobile flex justify-between p-2 text-sm text-[var(--dark-green)] md:p-5 md:mt-10">
        <Link to="https://www.linkedin.com/in/danielfloca/">LI ↱</Link>
        <p className="">DESIGNED WITH 💚 BY ME</p>
      </div>
    </footer>
  )
}
