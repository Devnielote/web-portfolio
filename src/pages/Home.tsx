import React from "react";
import { mainProjects } from "../interfaces/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectCarousel from "../components/ProjectCarousel";

export default function Home() {
  return (
    <div>
      <div className="hero_container text-[2.5rem] leading-9 text-left font-bold p-3">
        <h2>Web developer,</h2>
        <h2>frontend artisan,</h2>
        <h2>api whisperer.</h2>
      </div>
      <div className="announcements mt-3 pl-2 text-left">
        <span>AVAILABLE FOR WORK</span>
      </div>
      <ProjectCarousel/>
    </div>
  )
}
