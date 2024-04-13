<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonRow
} from '@ionic/vue'
import { computed } from 'vue'

// utilities
import { formatDistanceToNowStrict } from 'date-fns'

// years of experience
const startDate = new Date('2019-05-13T00:00:00')
const yearsOfExperience = computed(() => {
  return formatDistanceToNowStrict(startDate, {
    unit: 'year'
  })
})
</script>

<template>
  <ion-row class="ion-padding-vertical ion-justify-space-between">
    <ion-col
      class="observer-target"
      size="12"
    >
      <div class="header">
        <h1 class="heading">
          career
        </h1>
      </div>
    </ion-col>
    <ion-col
      class="observer-target"
      size="12"
    >
      <p>
        I have <span class="bold">{{ yearsOfExperience }}</span> of professional 
        experience in software engineering with a specialization in frontend 
        development.
      </p>
      <p>
        Before software engineering, I was a graphic designer and illustrator with
        <span class="bold">2.5 years</span> of professional experience.
      </p>
      <p>
        At my current position, I am lucky enough to be able to use both skill
        sets. I continue to apply my design skills to deliver delightful UI and UX 
        in my daily work.
      </p>
    </ion-col>
  </ion-row>
</template>