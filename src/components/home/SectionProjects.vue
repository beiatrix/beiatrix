<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonRow
} from '@ionic/vue'
import { computed } from 'vue'

// components
import CardProject from '@/components/projects/CardProject.vue'

// config
import { projects } from '@/config/projects'

/**
 * projects
 * ================================================================
 */
const filteredProjects = computed(() => {
  return projects.filter((project) => !project.private)
})
</script>

<template>
  <ion-row class="ion-padding-vertical">
    <ion-col
      class="observer-target"
      size="12"
    >
      <img
        :src="require('@/assets/images/projects.svg')"
        alt="projects"
        class="projects"
      >
    </ion-col>
    <ion-col
      class="observer-target"
      v-for="(project, index) in filteredProjects"
      :key="`project-${index}`"
      size-md="6"
      size="12"
    >
      <CardProject :project="project" />
    </ion-col>
  </ion-row>
</template>

<style scoped>
img.projects {
  height: 5.5rem;
}
</style>
