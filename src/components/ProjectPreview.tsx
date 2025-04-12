import React from "react";

interface ProjectPreviewProps {
  name: string;
  engDescription: string;
}

export default function ProjectPreview({
  name,
  engDescription,
}: ProjectPreviewProps) {
  return (
    <div className="w-[21rem] hover:scale-105 transition-all duration-500 hover:cursor-pointer">
      <div className="w-[21rem] h-[14rem] bg-black opacity-10 mb-4"></div>
      <p className="text-4xl mb-2">{name}</p>
      <p className="text-md">{engDescription}</p>
    </div>
  );
}
