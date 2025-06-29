import React from "react";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <footer>
      <div className="footer_navigation">
        <div className="reach_me">
          <Link to="/">daniel.flores@dev.com</Link>
        </div>
        <div className="footer_links">
          <Link to="/home">Home</Link>
          <Link to="/projects">Selected projects</Link>
          <Link to="/home">About</Link>
        </div>
        <div className="socials">
          <Link to="https://www.linkedin.com/in/danielflorescardona/">Linkedin</Link>
          <Link to="https://github.com/Devnielote">Github</Link>
          <Link to="/home">Resume</Link>
        </div>
        <div>
          <Link to="/home">
            <h1>Let's create together --- <img src="" alt=""/></h1>
          </Link>
        </div>
        <p>DESIGNED WITH 💚 BY ME</p>
      </div>
    </footer>
  )
}
