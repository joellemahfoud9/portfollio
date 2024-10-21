import React from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants";

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = PROJECTS.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <div className="container mx-auto p-4 sm:p-8 text-neutral-300">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="text-cyan-300 underline">
          Go Back 
        </Link>
      </div>
    );
  }

  return (
    <div
      className=" py-12  overflow-x-hidden text-neutral-300 antialiased
      selection:bg-cyan-300 selection:text-cyan-900 relative"
    >
      <div className="absolute top-0 -z-10 h-full w-full bg-[#0a192f]"></div>
      <div className="max-w-7xl mx-auto">
        <Link
          to="/#projects"
          className="text-cyan-300 underline px-9 mb-6 inline-block hover:text-cyan-500 transition-colors"
        >
          ← Go Back
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold px-9 mb-4">{project.name}</h1>

        <p className="mb-6 text-base sm:text-lg px-9">{project.description}</p>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 px-9 underline mb-8 block hover:text-slate-400 transition-colors"
        >
          View on GitHub
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-9">
          {project.photos.map((photo, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg overflow-hidden shadow-lg border border-[#64ffda] bg-[#112240]"
            >
              <div className="w-full h-48 sm:h-56 lg:h-64 relative">
                <img
                  src={process.env.PUBLIC_URL+ photo}
                  alt={`${project.name} Screenshot ${index + 1}`}
                  className="w-full h-full object-contain "
                />
              </div>
              <p className="p-4 text-sm sm:text-base">{project.photoDescriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
