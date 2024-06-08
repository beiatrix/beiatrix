<script setup lang="ts">
// ionic + vue
import { 
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon
} from '@ionic/vue'
import { logoGithub } from 'ionicons/icons'

// types
import { Project } from '@/types'

// components
import IconTechnology from '@/components/projects/IconTechnology.vue'

/**
 * props
 * ================================================================
 */
interface Props {
  project: Project
}
defineProps<Props>()

/**
 * projects
 * ================================================================
 */
function getProjectUrl (project: Project) {
  return project.slug 
    ? `/projects/${project.slug}`
    : project.url
}
</script>

<template>
  <ion-card 
    button
    mode="md"
    target="_blank"
    :href="getProjectUrl(project)"
  >
    <div class="img-container">
      <img 
        :alt="project.title"
        :src="project.image" 
      />
    </div>

    <ion-card-header>
      <ion-card-title>
        {{ project.title }}
      </ion-card-title>
      <ion-card-subtitle class="overline">
        <div>
          {{ project.subtitle }}
        </div>
        <div class="icon-technology-container">
          <ion-button
            v-if="project.githubUrl" 
            color="white"
            shape="round"
            style="margin-right: 0.2rem;"
            :href="project.githubUrl"
            target="_blank"
          >
            <ion-icon 
              color="charcoal"
              :icon="logoGithub" 
              slot="icon-only"
            />
          </ion-button>
          <IconTechnology 
            v-for="(technology, index) in project.technologies"
            :style="
              index < project.technologies.length - 1
                ? 'margin-right: 0.5rem;' 
                : ''
              "
            :key="`${project.title}-${technology}`"
            :technology-name="technology"
          />
        </div>
      </ion-card-subtitle>
    </ion-card-header>    
  </ion-card>
</template>

<style scoped>
ion-card {
  height: 95%;
  box-shadow: 1px 4px 8px rgb(var(--ion-color-charcoal-rgb), 0.2);
  border-radius: 0.5rem;
  transition: transform .2s; /* Animation */
}

ion-card:hover {
  box-shadow: 2px 8px 12px rgb(var(--ion-color-charcoal-rgb), 0.2);
  transform: scale(1.03); /* (103% zoom) */
}

ion-card-header {
  padding-bottom: 0.5rem;
}

ion-card-title {
  word-break: normal;
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 700;
}

ion-card-subtitle {
  display: flex;
  justify-content: space-between;
}

ion-card-content {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
}

img {
  box-shadow: 1px 4px 8px rgb(var(--ion-color-charcoal-rgb), 0.2);
  border-radius: 0.25rem;
}

.img-container {
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 1.25rem;
  background-color: var(--ion-color-light-shade);
}

.icon-technology-container {
  display: flex;
  justify-content: flex-end;
  align-items: start;
  margin-bottom: 0.2rem;
}

ion-button {
  --box-shadow: 0;
  --padding-start: 0.3rem;
  --padding-end: 0.3rem;
  margin-top: -0.4rem;
}
</style>

