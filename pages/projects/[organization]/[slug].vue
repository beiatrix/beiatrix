<script setup lang="ts">
import type { ProjectDoc } from '@/types'

definePageMeta({ 
  layout: 'project-show'
})

const route = useRoute()

const project = ref<ProjectDoc | null>(null);

const organization = computed(() => String(route.params.organization) || '')
const slug = computed(() => String(route.params.slug) || '')

const fetchProjectContent = async () => {
  return await queryCollection('content')
    .path(`/professional/${organization.value}/${slug.value}`)
    .first()
}

project.value = await fetchProjectContent()

onBeforeRouteUpdate(async () => {
  project.value = await fetchProjectContent()
})

useSeoMeta({
  title: project.value?.title || 'Project',
  description: project.value?.description || undefined
})
</script>

<template>
  <div v-if="project">
    <HeaderProject :project />
    <ContentRenderer 
      class="prose leading-relaxed text-[17.6px] text-charcoal tracking-wide font-light flex flex-col gap-5"
      :value="project" 
    />
  </div>
  <div v-else>Project not found</div>
</template>
