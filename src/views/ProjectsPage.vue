<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow
} from '@ionic/vue'
import { computed } from 'vue'

// components
import AppBar from '@/components/shared/AppBar.vue'
import AppBarMenu from '@/components/shared/AppBarMenu.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
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
  <ion-page>
    <AppBarMenu />
    <div
      class="ion-page"
      id="main-content"
    >
      <ion-header class="ion-no-border">
        <AppBar />
      </ion-header>

      <ion-content color="creme">
        <ion-grid class="container">
          <ion-row class="ion-justify-content-center ion-padding">
            <ion-col
              class="ion-padding"
              size="12"
              size-sm="10"
              size-md="9"
            >
              <ion-row class="ion-padding-vertical">
                <ion-col size="12">
                  <img
                    :src="require('@/assets/images/projects.svg')"
                    alt="projects"
                    class="projects"
                  >
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col
                  v-for="(project, index) in filteredProjects"
                  :key="`project-${index}`"
                  size-md="6"
                  size-xl="4"
                  size="12"
                >
                  <CardProject :project="project" />
                </ion-col>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-grid>
        <AppFooter />
      </ion-content>
    </div>
  </ion-page>
</template>

<style scoped>
img.projects {
  height: 5.5rem;
}
</style>
