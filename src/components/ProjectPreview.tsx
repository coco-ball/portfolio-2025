import React from "react";
import { useNavigate } from "react-router-dom";
import ThumbPicture from "./ThumbPicture";

interface ProjectPreviewProps {
  id: string;
  title: string;
  thumbnail: string; // 예: "/images/projects/mindly/thumbnail.png"
  category: string;
  period: string;
  description?: string;
  /** 첫 행 몇 개는 true로 넘겨주면 LCP 빨라짐 (부모에서 i<4 등으로) */
  priority?: boolean;
}

export default function ProjectPreview({
  id,
  title,
  thumbnail,
  category,
  period,
  description,
  priority = false,
}: ProjectPreviewProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/project/${id}`)}
      className="w-[21rem] hover:scale-105 transition-all duration-500 hover:cursor-pointer"
    >
      <ThumbPicture
        png={thumbnail}
        alt={title}
        // 3:2 비율로 CLS 고정 — 실제 렌더 폭은 w-[21rem]로 제한됨
        width={600}
        height={400}
        sizes="(min-width:768px) 336px, 80vw" // 21rem=336px 기준
        priority={priority}
        className="w-full mb-5 rounded-lg object-cover"
      />
      <p className="text-4xl mb-2">{title}</p>
      <p className="text-md hyphens-auto">{period}</p>
      <p className="text-md hyphens-auto">{category}</p>
      <p className="text-md hyphens-auto">{description}</p>
    </div>
  );
}
