import { Link } from 'react-router-dom';
import type { Project } from '../interfaces/projects';

export default function ProjectCard(props: Project) {
  const {liveUrl,imageUrl,tags} = props;

  return(
    <div className='project_container flex-col align-middle  mb-2'>
      <div className="image_container w-10/12 m-auto mb-7 sm:w-5/12 lg:w-5/6">
        <Link to={liveUrl}>
          <img src={imageUrl} alt="" className='w-full hover:cursor-grab'/>
        </Link>
      </div>
      <div className="tag_container mb-2 text-[var(--green-phosphor)]">
        {tags.map((tag,index) => (
          <span key={index} className='project_tag mr-2'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
