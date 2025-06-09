import React from "react";
import { useNavigate } from "react-router-dom";

interface ProjectPreviewProps {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
}

export default function ProjectPreview({
  id,
  name,
  thumbnail,
  description,
}: ProjectPreviewProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${id}`)}
      className="w-[21rem] hover:scale-105 transition-all duration-500 hover:cursor-pointer"
    >
      <img
        src={thumbnail}
        alt={name}
        className="w-full mb-5 rounded-lg object-cover"
        style={{ aspectRatio: "3 / 2" }}
      />
      <p className="text-4xl mb-2">{name}</p>
      <p className="text-md hyphens-auto">{description}</p>
    </div>
  );
}
