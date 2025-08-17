<script setup lang="ts">
import { mapProject } from '@/utils/project'

const { data: projects } = await useAsyncData(() => queryCollection('content').all())

const featuredProjects = computed(() => {
  return (
    projects.value?.filter((project) => project.meta?.featured)
      .map(mapProject)
  )
})
</script>

<template>
  <AppSection
    img-classes="h-20 mb-4"
    img-url="/images/projects.svg"
    title="projects"
  >
    <p class="mb-10">
        Here are a few of my highlighted projects below.
        To see even more, visit my
        <strong>
          <a
            class="font-semibold text-primary underline"
            href="/projects"
            target="_blank"
          >
            projects page</a>
        </strong>!
      </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <AppCard
            v-for="project in featuredProjects"
            :key="`project-${project.id}`"
            :github-url="project.githubUrl"
            :img-url="project.imgUrl"
            :project-url="project.projectUrl"
            :subtitle="project.subtitle"
            :technologies="project.technologies"
            :title="project.title"
          />
        </div>
      <div class="flex flex-col items-center">
        <AppButton  
          class="mb-3"
          href="/projects"
        >
          View more projects!
        </AppButton>
        <NuxtImg
          alt="click-here"
          class="h-16 w-auto ms-56 sm:ms-64 md:ms-72 object-contain"
          src="/images/click-here.svg" 
        />
      </div>
  </AppSection>
</template>
