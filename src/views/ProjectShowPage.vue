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
import { 
  computed, 
  nextTick, 
  onMounted, 
  onUpdated, 
  ref 
} from 'vue'

// route
import { useRoute } from 'vue-router'

// markdown
import Markdown from 'vue3-markdown-it'

// components
import AppBar from '@/components/shared/AppBar.vue'
import AppBarMenu from '@/components/shared/AppBarMenu.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
import IconTechnology from '@/components/projects/IconTechnology.vue'

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

/**
 * images
 * ================================================================
 */
const projectContentElement = ref<HTMLElement | undefined>(undefined)
function applyImageStyles () {
  /**
   * using style scoped to attempt to access the img tags is not working –
   * likely due to the way the question content is loaded via v-html.
   * while not ideal, this method is a functioning workaround.
   */
  const images = projectContentElement.value?.getElementsByTagName('img')
  if (images) {
    for (const image of images) {
      image.style.margin = '1rem 0'
      image.style.borderRadius = '0.3rem'
      image.style.boxShadow = '1px 4px 8px rgb(var(--ion-color-charcoal-rgb), 0.3)'
    }
  }
}

// lifecycle hooks
onUpdated(async () => {
  await nextTick()
  applyImageStyles()
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
              <h1 class="title">
                {{ project.title }}
              </h1>
              <div class="chip-container">
                <IonChip v-if="project.company">
                  @ {{ project.company }}
                </IonChip>
                <IonChip>{{ project.year }}</IonChip>
                <div class="icon-technology-container">
                  <IconTechnology 
                    v-for="technology in project.technologies"
                    style="margin-left: 0.5rem;"
                    :key="`${project.title}-${technology}`"
                    :technology-name="technology"
                  />
                </div>
              </div>
              <div ref="projectContentElement">
                <Markdown 
                  v-if="project.content"
                  :html="true"
                  :source="project.content.toString()" 
                />
              </div>
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

h1.title {
  font-size: 3rem;
  font-weight: 700;
}

hr {
  border-bottom: 3px solid var(--ion-color-medium);
}

ion-chip {
  --background: var(--ion-color-tertiary);
  --color: var(--ion-color-primary);
  border-radius: 0.25rem;
  height: 1.5rem;
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
}

p {
  margin: 0.25rem 0;
}

.chip-container {
  display: flex;
  padding: 0.5rem 0 1.5rem 0;
}

.divider {
  border-bottom: 2px solid var(--ion-color-secondary);
}

.icon-technology-container {
  display: flex;
  align-items: center;
}
</style>
