<script setup lang="ts">
// ionic + vue
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonMenuButton,
  IonToolbar
} from '@ionic/vue'
import { computed, onMounted, ref } from 'vue'

// config
import { appBarItems } from '@/config/appBarItems'

// composables
import { useAppBarItems } from '@/composables/appBarItems'

// responsiveness
const windowWidth = ref()
function setWindowWidth () {
  windowWidth.value = window.innerWidth
}
const showButtonText = computed(() => {
  return windowWidth.value >= 992 // lg
})
const showPushMenu = computed(() => {
  return windowWidth.value < 768 // md
})

// app bar item links
const { getTargetAttribute } = useAppBarItems()

// lifecycle hooks
onMounted(() => {
  setWindowWidth()
  window.addEventListener('resize', () => {
    setWindowWidth()
  })
})
</script>

<template>
  <ion-toolbar>
    <ion-buttons 
      class="ion-padding"
      slot="start"
    >
      <ion-button>
        <ion-icon
          slot="icon-only"
          :src="require('@/assets/images/logo.svg')"
        />
      </ion-button>
    </ion-buttons>
    <ion-buttons 
      class="ion-padding"
      slot="end"
    >
      <ion-menu-button 
        v-if="showPushMenu"
        color="primary" 
      />
      <div 
        v-else
        class="ion-padding-end"
      >
        <ion-button
          v-for="(item, index) in appBarItems"
          :key="`app-bar-item-${index}`"
          :href="item.url"
          :target="getTargetAttribute(item.url)"
        >
          <ion-icon 
            slot="start"
            color="primary"
            :icon="item.icon"
          />
          <span
            v-if="showButtonText"
            class="app-bar-item-text"
          >
            {{ item.text }}
          </span>
        </ion-button>
      </div>
    </ion-buttons>
  </ion-toolbar>
</template>

<style scoped>
ion-toolbar {
  --background: var(--ion-color-tertiary);
}

.app-bar-item-text {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
  color: var(--ion-color-primary);
}
</style>