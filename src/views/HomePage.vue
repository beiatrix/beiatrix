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
import { onMounted, onUnmounted } from 'vue'

// composables
import { useIntersectionObserver } from '@/composables/intersectionObserver'

// components
import AppBar from '@/components/AppBar.vue'
import AppBarMenu from '@/components/AppBarMenu.vue'
import AppFooter from '@/components/AppFooter.vue'
import SectionCareer from '@/components/SectionCareer.vue'
import SectionHello from '@/components/SectionHello.vue'
import SectionInterests from '@/components/SectionInterests.vue'
import SectionSkills from '@/components/SectionSkills.vue'

// use IntersectionObserver to support animations on scroll into view
const {
  disconnectIntersectionObserver,
  observeTargets,
  setIntersectionObserver
} = useIntersectionObserver()

// lifecycle hooks
onMounted(() => {
  setIntersectionObserver()
  observeTargets()
})

onUnmounted(() => {
  disconnectIntersectionObserver()
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

      <ion-content>
        <ion-grid class="container">
          <ion-row class="ion-justify-content-center ion-padding">
            <ion-col
              class="ion-padding"
              size="12"
              size-sm="10"
              size-md="9"
              size-lg="8"
              size-xl="6"
            >
              <SectionHello />
              <SectionCareer />
              <SectionSkills />
              <SectionInterests />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>

      <AppFooter />
    </div>
  </ion-page>
</template>

<style scoped>
.container {
  background-color: var(--ion-color-creme);
  height: 100%;
}
</style>
