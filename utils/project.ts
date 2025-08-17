import type { ContentCollectionItem } from "@nuxt/content";

export const mapProject = (project: ContentCollectionItem) => {
  return {
    id: project.id,
    githubUrl: project.meta?.githubUrl as string | undefined,
    imgUrl: project.meta?.image as string,
    projectUrl: (project.meta?.url ? project.meta?.url : `/projects/${project.meta?.organization}/${project.meta?.slug}`) as string,
    title: project.title as string,
    subtitle: project.meta?.subtitle as string,
    technologies: project.meta?.technologies as string[] | undefined
  }
}