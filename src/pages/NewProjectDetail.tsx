import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProject } from "../projects";
import { ProjectInfo } from "../components/ProjectInfo";

export default function ProjectDetail() {
  const { slug = "" } = useParams();
  const entry = getProject(slug);
  if (!entry) return <Navigate to="/works" replace />;

  const { meta, Content } = entry;
  return (
    <main className="h-[50vh] md:h-screen min-h-screen text-black overflow-y-scroll px-10 pt-32 pb-40">
      <ProjectInfo meta={meta} />
      <Content />
    </main>
  );
}
