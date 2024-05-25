<script setup lang="ts">
// ionic + vue
import { 
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/vue'

// types
import { Project } from '@/types'

// props
interface Props {
  project: Project
}
defineProps<Props>()

// methods
function getProjectUrl (project: Project) {
  return project.slug 
    ? `/projects/${project.slug}`
    : project.url
}
</script>

<template>
  <ion-card 
    button
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
        {{ project.subtitle }}
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

ion-card-title {
  word-break: normal;
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 700;
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
  align-items: center;
  padding: 1.5rem;
  background-color: var(--ion-color-light-shade);
}
</style>

