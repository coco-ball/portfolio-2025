export type ProjectMeta = {
  slug: string;
  title: string;
  thumbnail: string;
  category: string;
  period: string;
  type: string;
  link?: string;
  description?: string;
};

export type ProjectEntry = {
  meta: ProjectMeta;
  Content: React.FC;
};
