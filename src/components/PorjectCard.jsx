// src/components/ProjectCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden transition-colors text-white border border-[#64ffda]">
      <img
        src={project.photos[0]}
        alt={project.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 underline mb-4 block text-center"
          >
            GitHub
          </a>
          <Link
            to={`/details/${project.id}`}
            className="border text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors  px-3 py-3 rounded"
          >
          Show All Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
