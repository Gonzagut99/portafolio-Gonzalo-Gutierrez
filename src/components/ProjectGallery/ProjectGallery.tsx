import React, {useState} from 'react'
import './styles.css'
import { PROJECTS, TAGS, type Tag, type ProjectsType } from "../projectTypesReact";

function ProjectGallery() {

  const [filtroActual, setFiltroActual] = useState<Tag|null>(null);

  const uniqueTags =  Array.from(PROJECTS.reduce((acc, project) => {
    return new Set([...acc, ...project.technologyTags]);
  }, new Set())) as Tag[];

  const proyectosFiltrados = filtroActual
    ? PROJECTS.filter((project:ProjectsType) => project.technologyTags.includes(filtroActual))
    : PROJECTS;

  const handleBadgeClick = (tag:Tag) => {
      setFiltroActual(tag);
  };
  return (
    <>
      <ul className="flex gap-x-2 flex-row mb-10 flex-wrap gap-y-3">
        {uniqueTags.map((tag:Tag, tagIndex) => (
          <li key={tagIndex}>
            <button
              onClick={() => handleBadgeClick(tag)}
              className={`flex gap-x-2 rounded-full text-xs font-extralight ${tag.class} py-2 px-4`}
            >
              <tag.icon className="size-4" />
              {tag.name}
            </button>
          </li>
        ))}
        <li>
            <button
              onClick={() => setFiltroActual(null)}
              className={`flex gap-x-2 rounded-full text-xs font-extralight bg-gray-50/20 py-2 px-4`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
              Limpiar filtros
            </button>
          </li>
      </ul>
      <section className="sm:columns-2">
        {proyectosFiltrados.map((project, projectIndex) => (
          <a
            key={projectIndex}
            className="flex flex-col mb-8 gap-y-2 shadow-lg transition ease-in-out delay-150 duration-300 hover:scale-[1.02]"
            href={`/proyectodetalle/${project.id}`}
          >
            <img
              className="rounded-lg"
              src={project.images[0]}
              alt={`Captura ${project.title}`}
            />
            <div className="flex flex-wrap justify-between gap-y-1 gap-x-2 font-light text-base md:text-lg">
              <h2 className="text-nowrap text-gray-200/85">{project.title}</h2>
              <ul className="flex gap-x-1 flex-row flex-wrap gap-y-1">
                {project.technologyTags.map((tag, tagIndex) => (
                  <li key={tagIndex}>
                    <span
                      className={`flex gap-x-2 rounded-full text-base ${tag.class} p-2`}
                    >
                      <tag.icon key={tagIndex} className="size-4" />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </section>
    </>
  );
}

export default ProjectGallery