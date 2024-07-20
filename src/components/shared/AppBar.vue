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

/**
 * app bar item links
 * ================================================================
 */
const { getTargetAttribute } = useAppBarItems()

/**
 * responsiveness
 * ================================================================
 */
const windowWidth = ref()

const showPushMenu = computed(() => {
  return windowWidth.value < 768 // md
})

function setWindowWidth () {
  windowWidth.value = window.innerWidth
}

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
      <ion-button href="/">
        <ion-icon
          slot="icon-only"
          :src="require('@/assets/images/beiatrix-logo.svg')"
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
          class="btn-app-bar"
          :href="item.url"
          :target="getTargetAttribute(item.url)"
        >
          <ion-icon
            color="primary"
            slot="icon-only"
            :icon="item.icon"
          />
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

.btn-app-bar {
  margin: 0 0.5rem;
}
</style>
