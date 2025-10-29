import React from "react";
import type { ProjectMeta } from "../types/project";

export function ProjectInfo({ meta }: { meta: ProjectMeta }) {
  const { title, category, period, type, link, description } = meta;
  return (
    <div className="flex flex-col text-center overflow-scroll max-w-4xl mx-auto md:px-8">
      {link?.length ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-black mx-auto mb-2 hover:opacity-50 transition-all duration-300"
        >
          <span>Website</span>
          <span>
            <img src="/images/link.png" className="w-[1.1rem] h-[1.1rem]" />
          </span>
        </a>
      ) : null}
      <h1 className="text-5xl font-bold mb-6 uppercase">{title}</h1>
      <div className="flex gap-6 justify-center text-md mb-6 text-gray-500 md:text-lg">
        <p>{category}</p>
        <p>{period}</p>
        <p>{type}</p>
      </div>

      <p className="text-md leading-relaxed whitespace-pre-line mb-16 md:text-lg">
        {description}
      </p>
    </div>
  );
}
