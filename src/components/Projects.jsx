import projects from "../data/projects";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
