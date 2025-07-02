import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css'; // estilo base
import 'swiper/css/pagination';

import ProjectCard from './ProjectCard';
import { mainProjects } from '../interfaces/projects';
import type { Project } from '../interfaces/projects';

export default function ProjectCarousel() {
  return (
    <>
      <Swiper
        className='relative mt-3'
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{clickable: true}}
        scrollbar={{draggable: false}}
        loop={true}
      >
        {mainProjects.map((project: Project) => (
          <SwiperSlide className='hover:brightness-125 hover:drop-shadow-[0_0_5px_#42ae38]' key={project.title}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

