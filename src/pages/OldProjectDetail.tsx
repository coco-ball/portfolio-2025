import React from "react";
import type { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import projectData from "../data/ProjectData";
import ResponsivePicture from "../components/ResponsivePicture";

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((p) => p.id === id);

  if (!id) return null;
  if (!project) return <Navigate to="/works" replace />;

  const base = `/images/projects/${project.id}`;
  const images = Array.isArray(project.images) ? project.images : [];

  return (
    <div className="h-[50vh] pt-[4.25rem] grid grid-cols-1 md:h-screen md:grid-cols-2 min-h-screen text-black">
      {/* 왼쪽: 이미지 리스트 */}
      <div className="overflow-y-scroll p-6 pt-0 md:pt-4 space-y-4">
        {images.map((filename, i) => {
          const src = `${base}/${filename}`;
          const isGif = filename.toLowerCase().endsWith(".gif");
          return (
            <li
              key={src}
              className="content-visibility-auto contain-paint rounded-2xl overflow-hidden"
            >
              {isGif ? (
                <img
                  src={src}
                  alt={`${project.name} — ${i + 1}`}
                  width={1600}
                  height={900}
                  loading={i < 2 ? "eager" : "lazy"}
                  fetchPriority={i < 2 ? "high" : "auto"}
                  className="block w-full h-auto object-cover"
                />
              ) : (
                <ResponsivePicture
                  basePng={src} // "/.../1.png"
                  alt={`${project.name} — ${i + 1}`}
                  width={1600}
                  height={900}
                  sizes="(min-width:768px) 960px, 92vw"
                  priority={i < 2} // 위쪽 2장만 eager
                  className="block w-full h-auto object-cover"
                />
              )}
            </li>
          );
        })}
      </div>

      {/* 오른쪽: 텍스트 */}
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
};

export default ProjectDetail;
