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
      <div class="header">
        <h1 class="heading">
          projects
        </h1>
      </div>
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