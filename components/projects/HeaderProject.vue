<script setup lang="ts">
import { technologyIcons } from '@/config/technology-icons'
import type { ProjectDoc } from '@/types';

const { project } = defineProps<{
  project: ProjectDoc 
}>()
</script>

<template>
  <header class="my-6">
    <h1 class="text-5xl font-semibold tracking-wide mb-3">
      {{ project.title }}
    </h1>
    <div class="flex gap-3 items-center py-3">
      <AppChip v-if="project.meta?.company">
        @ {{ project.meta?.company }}
      </AppChip>
      <AppChip>{{ project.meta?.year }}</AppChip>
        <Icon
          v-for="technology in project.meta?.technologies"
          :key="`${project.title}-${technology}`"
          v-tippy="technology"
          class="h-6 w-6"
          :name="technologyIcons[technology as keyof typeof technologyIcons]"
        />
    </div>
  </header>
</template>