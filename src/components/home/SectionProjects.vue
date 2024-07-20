<script setup lang="ts">
// ionic + vue
import {
  IonButton,
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
  return projects.filter((project) => project.featured)
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
      <p>
        Here are a few of my highlighted projects below.
        To see even more, visit my
        <strong>
          <a
            href="/projects"
            target="_blank"
          >
            projects page</a>
        </strong>!
      </p>
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
    <ion-col
      class="observer-target ion-padding view-more-container"
      size="12"
    >
      <ion-button
        class="ion-margin"
        color="mist"
        size="large"
        href="/projects"
        target="_blank"
      >
        <span class="btn-text">
          View more projects!
        </span>
      </ion-button>
      <img
        :src="require('@/assets/images/click-here.svg')"
        alt="click-here"
        class="click-here"
      >
    </ion-col>
  </ion-row>
</template>

<style scoped>
img.projects {
  height: 5.5rem;
}

.view-more-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-text {
  color: var(--ion-color-creme);
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-transform: none;
}

img.click-here {
  margin-top: 9rem;
  margin-right: -15rem;
  height: 4rem;
  position: absolute;
}
</style>
