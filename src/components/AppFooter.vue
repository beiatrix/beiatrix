<script setup lang="ts">
// ionic + vue
import {
  IonFooter,
  IonTitle,
  IonToolbar
} from '@ionic/vue'
import { computed } from 'vue'

// utilities
import { format } from 'date-fns'

// display year
const currentYear = computed(() => {
  return format(new Date(), 'yyyy')
})
</script>

<template>
  <ion-footer class="ion-no-border">
    <ion-toolbar color="forest">
      <ion-title class="ion-text-center">
        © beiatrix {{ currentYear }}
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<style scoped>
ion-title {
  color: var(--ion-color-creme);
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
}
</style>