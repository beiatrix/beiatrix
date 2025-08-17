<script setup lang="ts">
import { mapProject } from '@/utils/project'

definePageMeta({ 
  layout: 'projects'
})

const { data: projects } = await useAsyncData(() => queryCollection('content').all())

const filteredProjects = computed(() => {
  return (
    projects.value?.filter((project) => !project.meta?.private)
      .map(mapProject)
  )
})
</script>

<template>
  <div class="my-8">
    <header class="observer-target">
      <NuxtImg
        alt="projects"  
        class="h-20 mb-8"
        src="/images/projects.svg"
      />
    </header>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <AppCard
        v-for="project in filteredProjects" 
        :key="`project-${project.id}`"
        :github-url="project.githubUrl"
        :img-url="project.imgUrl"
        :project-url="project.projectUrl"
        :subtitle="project.subtitle"
        :technologies="project.technologies"
        :title="project.title"
      />
    </div>
  </div>
</template>
