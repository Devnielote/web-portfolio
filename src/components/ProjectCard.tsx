import React from 'react';
import type { Project } from '../interfaces/projects';

export default function ProjectCard(props: Project) {
  const {index,title,description,liveUrl,imageUrl,tags} = props;

  return(
    <div className='project_container flex-col align-middle  mb-2 mr-44'>
      <header className='mb-3 text-2xl font-bold'>
        <h1>{title}</h1>
      </header>
      <div className="image_container w-72 m-auto mb-7">
        <img src={imageUrl} alt="" className='w-full'/>
      </div>
      <div className="tag_container text-[var(--green-phosphor)]">
        {tags.map((tag,index) => (
          <span key={index} className='project_tag mr-2'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
