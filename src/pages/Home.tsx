import React from "react";
import { projects } from "../interfaces/projects";
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
      <div className="announcements">
        <span>AVAILABLE FOR WORK</span>
      </div>
      <div className="carrousel flex w-full min-w-72 mt-3 p-10 py-14 overflow-x-scroll">
        <ProjectCard {...projects[0]}/>
        <ProjectCard {...projects[1]}/>
        <ProjectCard {...projects[2]}/>
      </div>
    </div>
  )
}
