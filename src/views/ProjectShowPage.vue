<script setup lang="ts">
// ionic + vue
import { 
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow
} from '@ionic/vue'
import { computed, onMounted, ref } from 'vue'

// route
import { useRoute } from 'vue-router'

// markdown
import Markdown from 'vue3-markdown-it'

// components
import AppBar from '@/components/shared/AppBar.vue'
import AppBarMenu from '@/components/shared/AppBarMenu.vue'
import AppFooter from '@/components/shared/AppFooter.vue'

// content
import { projects } from '@/config/projects'

/**
 * route
 * ================================================================
 */
const route = useRoute()
const slug = computed(() => route.params.slug)

/**
 * project
 * ================================================================
 */
const project = ref()

onMounted(() => {
  project.value = projects.find(project => project.slug === slug.value)
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

      <ion-content 
        v-if="project"
        color="creme"
      >
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
              <h1>
                {{ project.title }}
              </h1>
              <div class="chip-container">
                <IonChip v-if="project.company">
                  {{ project.company }}
                </IonChip>
                <IonChip>{{ project.year }}</IonChip>
                <IonChip 
                  v-for="technology in project.technologies"
                  :key="`ion-chip-${technology}`"
                >
                  {{ technology }}
                </IonChip>
              </div>
              <Markdown 
                v-if="project.content"
                :source="project.content.toString()" 
              />
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
  height: 100%;
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
  color: var(--ion-color-dark);
}

h1 {
  font-weight: 700;
}

ion-chip {
  --background: var(--ion-color-dark);
  --color: var(--ion-color-glow);
  border-radius: 0.25rem;
  height: 1.5rem;
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
}

p {
  margin: 0.25rem 0;
}

.chip-container {
  padding: 0.5rem 0 1.5rem 0;
}

.divider {
  border-bottom: 2px solid var(--ion-color-secondary);
}
</style>
