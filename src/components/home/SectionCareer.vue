<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonRow
} from '@ionic/vue'
import { computed } from 'vue'

// utilities
import { formatDistanceToNowStrict } from 'date-fns'

/**
 * years of experience
 * ================================================================
 */
const startDate = new Date('2019-05-13T00:00:00')
const yearsOfExperience = computed(() => {
  return formatDistanceToNowStrict(startDate, {
    unit: 'year'
  })
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
          career
        </h1>
      </div>
    </ion-col>
    <ion-col
      class="observer-target"
      size="12"
    >
      <p>
        I have <strong>{{ yearsOfExperience }}</strong> of professional 
        experience in software engineering with a specialization in frontend 
        development.
      </p>
      <p>
        Before software engineering, I was a graphic designer and illustrator with
        <strong>2.5 years</strong> of professional experience.
      </p>
      <p>
        I find joy in being able to use both skill sets. I continue to apply my 
        design skills to deliver delightful UI and UX in my daily work.
      </p>
      <p>
        If you'd like to learn more, here is my <strong>
          <a href="https://beiatrix.s3.us-west-1.amazonaws.com/resume/Beiatrix_Pedrasa_-_Resume.pdf">
            resume</a>
        </strong>.
      </p>
    </ion-col>
  </ion-row>
</template>