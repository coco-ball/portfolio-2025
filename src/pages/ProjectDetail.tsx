import React from "react";
import type { FC } from "react";
import { useParams, Navigate } from "react-router-dom";
import projectData, { Project } from "../data/ProjectData";
import ImageLite from "../components/ImageLite";
import { Helmet } from "react-helmet-async";

type ImgMeta = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: `${number}/${number}` | number;
};

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectData.find((p) => p.id === id);

  if (!id) return null;
  if (!project) return <Navigate to="/works" replace />;

  const base = `/images/projects/${project.id}`;
  const images = Array.isArray(project.images) ? project.images : [];

  const first = images[0] ? `${base}/${images[0]}` : undefined;
  const second = images[1] ? `${base}/${images[1]}` : undefined;

  return (
    <div className="h-[50vh] pt-[4.25rem] grid grid-cols-1 md:h-screen md:grid-cols-2 min-h-screen text-black">
      {/* 왼쪽 이미지 */}
      <Helmet>
        {first && (
          <link rel="preload" as="image" href={first} fetchPriority="high" />
        )}
        {second && <link rel="preload" as="image" href={second} />}
      </Helmet>
      <div className="overflow-y-scroll p-6 pt-0 md:pt-4 space-y-4">
        {images.map((filename, i) => {
          const src = `${base}/${filename}`;
          return (
            <li key={src} className="rounded-2xl overflow-hidden">
              <ImageLite
                src={src}
                alt={`${project.name} — ${i + 1}`}
                // 대부분 1600x900이므로 고정 (다르면 그 항목만 바꿔도 됨)
                width={1600}
                height={900}
                priority={i === 0} // 첫 장만 LCP 우선
                className="block w-full h-auto object-cover"
              />
            </li>
          );
        })}
        {/* {project.images.map((img, index) => (
          <img
            key={index}
            src={`/images/projects/${project.id}/${img}`}
            alt={`${project.name} image ${index + 1}`}
            className="w-full rounded"
          />
        ))} */}
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
};

export default ProjectDetail;
