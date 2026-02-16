import { useEffect, useState } from "react";

import ProjectItem from "./ProjectItem";
// import Spinner from "./Spinner";
import SkeletonProject from "./SkeletonProject";
import Title from "./Title";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_PROJECTS_URL = import.meta.env.VITE_API_PROJECTS_URL;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const fetchProjects = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(API_PROJECTS_URL, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      console.log(data);
      if (!data || data.length === 0) {
        setError("No projects found.");
        setProjects([]);
        return;
      }
      setProjects(data);
    } catch (error) {
      console.error(`Error fetching projects: ${error}`);
      setError("Error fetching projects. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div id="projects" className="text-gray-50">
      {/* // TODO: Change the title to 'Portfolio' when I'll separate my personal and side projects with freelance projects */}
      {/* // The Portfolio API should probably be changed for that */}

      <Title>Projects</Title>
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {isLoading ? (
            <SkeletonProject />
          ) : error ? (
            <p className="text-red-500 font-mona font-semibold tracking-wide flex justify-center w-full col-span-1 md:col-span-2 lg:col-span-3 ">
              {error}
            </p>
          ) : (
            projects.map((project) => (
              <ProjectItem
                key={project._id}
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
};

export default Projects;
