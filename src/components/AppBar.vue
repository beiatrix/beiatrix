<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonToolbar
} from '@ionic/vue'
import { appBarItems } from '@/config/appBarItems'

function getTarget (url: string) {
  return url.includes('mailto') ? '' : '_blank'
}
</script>

<template>
  <ion-toolbar>
    <ion-buttons
      class="ion-margin"
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
      class="ion-margin"
      slot="end"
    >
      <ion-button
        v-for="(item, index) in appBarItems"
        :key="`app-bar-item-${index}`"
        :href="item.url"
        :target="getTarget(item.url)"
      >
        <ion-icon 
          slot="icon-only"
          color="primary"
          :icon="item.icon"
        />
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</template>

<style scoped>
ion-toolbar {
  --background: var(--ion-color-tertiary);
}
</style>