import React from "react";
import { Link } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview";
import { getAllProjects } from "../projects";

function CurrentWorks() {
  const entries = getAllProjects(); // [{ meta, Content }, ...]

  return (
    <div className="h-screen flex flex-col md:flex-row gap-24 items-center md:justify-center py-24 text-black overflow-scroll pb-32">
      {entries.map(({ meta }) => (
        <Link key={meta.slug} to={`/works/${meta.slug}`} className="block">
          <ProjectPreview
            id={meta.slug}
            title={meta.title}
            thumbnail={meta.thumbnail ?? ""}
            category={meta.category ?? ""}
            period={meta.period ?? ""}
            // description={meta.description ?? ""}
          />
        </Link>
      ))}
    </div>
  );
}

export default CurrentWorks;
