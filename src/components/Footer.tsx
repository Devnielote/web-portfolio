import React from "react";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <footer>
      <div className="footer_navigation px-3 pt-10 mt-10">
        <div className="reach_me w-full flex-col text-left"> 
          <span>/CONTACT ME</span>
          <div className="text-lg mt-2">
            <Link to="/">daniel.flores@dev.com</Link>
          </div>
        </div>
        <div className="socials flex-col text-left mt-4">
          <span>/STALK ME</span>
          <div className="flex-col mt-2">
            <Link className="flex w-auto" to="https://www.linkedin.com/in/danielflorescardona/">Linkedin</Link>
            <Link className="flex" to="https://github.com/Devnielote">Github</Link>
            <Link className="flex" to="/home">Resume</Link>
          </div>
          <div className="footer_links flex-col mt-4">
            <span>/NAVIGATE TO</span>
            <Link to="/home" className="flex mt-2">Home</Link>
            <Link to="/projects" className="flex">Selected projects</Link>
            <Link to="/home" className="flex">About</Link>
          </div>
        </div>
        <div>
          <Link to="/home" className="text-left">
            <h1 className="text-6xl">Let's create together<img src="" alt=""/></h1>
          </Link>
        </div>
        <p className="mt-5 py-5">DESIGNED WITH 💚 BY ME</p>
      </div>
    </footer>
  )
}
