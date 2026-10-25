import { notFound } from "next/navigation";
import ProjectView from "@/views/ProjectView";
import { PROJECTS, getProject } from "@/lib/projects";
import { alternates } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.vi.title,
    description: p.vi.desc,
    alternates: alternates("vi", `/portfolio/${p.slug}`),
  };
}

export default function Page({ params }) {
  const project = getProject(params.slug);
  if (!project || !project.caseStudy) notFound();
  return <ProjectView lang="vi" project={project} />;
}
