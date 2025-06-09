import React from "react";
import { useParams } from "react-router-dom";
import projectData, { Project } from "../data/projectData";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project: Project | undefined = projectData.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <div className="h-[50vh] pt-[4.25rem] grid grid-cols-1 md:h-screen md:grid-cols-2 min-h-screen text-black">
      {/* 왼쪽 이미지 */}
      <div className="overflow-y-scroll p-6 pt-0 md:pt-4 space-y-4">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={`/images/projects/${project.id}/${img}`}
            alt={`${project.name} image ${index + 1}`}
            className="w-full rounded"
          />
        ))}
      </div>

      {/* 오른쪽 텍스트 */}
      <div className="p-10 flex flex-col overflow-scroll">
        <h1 className="text-5xl font-bold mb-3 uppercase">{project.name}</h1>
        <p className="text-md mb-6 text-gray-500">
          {project.category}, {project.duration}
        </p>
        <p className="text-md leading-relaxed whitespace-pre-line mb-40">
          {project.detailDescription}
        </p>
      </div>
    </div>
  );
}
