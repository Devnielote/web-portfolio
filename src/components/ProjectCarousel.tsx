import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // estilo base

import ProjectCard from './ProjectCard';
import { projects } from '../interfaces/projects';
import type { Project } from '../interfaces/projects';

export default function ProjectCarousel() {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project: Project) => (
        <SwiperSlide key={project.title}>
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

