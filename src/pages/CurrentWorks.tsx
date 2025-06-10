import React from "react";
import ProjectPreview from "../components/ProjectPreview";
import projectData from "../data/ProjectData";

function CurrentWorks() {
  return (
    <div className="h-screen flex flex-col md:flex-row gap-24 items-center md:justify-center py-24 text-black overflow-scroll pb-32">
      {projectData.map((project) => (
        <ProjectPreview
          key={project.id}
          id={project.id}
          name={project.name}
          thumbnail={project.thumbnail}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default CurrentWorks;
