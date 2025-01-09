import { useEffect, useState } from "react";
import axios from "axios";

import ProjectItem from "./ProjectItem";
import Title from "./Title";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  const projectsAPI = "https://portfolio-api-nq76.onrender.com/api/projects";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(projectsAPI);

        setProjects(res.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="dark:text-gray-50 text-black">
      // TODO: title to be changed when I'll separate my personal and side projects with freelance projects
      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {error ? (
            <p className="py-10 text-center">Error fetching projects!</p>
          ) : (
            projects.map((project) => (
              <ProjectItem
                key={project._id}
                // image={project.images[0]}
                // TODO: add a slider or carousel for each project card
                images={project.images}
                title={project.title}
                description={project.description}
                tags={project.tags}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
