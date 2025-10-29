import type { ProjectEntry } from "../types/project";

// 개별 프로젝트 모듈
import * as Mindly from "./mindly";
import * as Snucse from "./snucse";

const registry = new Map<string, ProjectEntry>([
  [Snucse.meta.slug, { meta: Snucse.meta, Content: Snucse.Content }],
  [Mindly.meta.slug, { meta: Mindly.meta, Content: Mindly.Content }],
]);

export function getProject(slug: string) {
  return registry.get(slug);
}

export function getAllProjects(): ProjectEntry[] {
  return Array.from(registry.values());
}
