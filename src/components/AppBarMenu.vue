<script setup lang="ts">
// ionic + vue
import {
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonMenu
} from '@ionic/vue'

// config
import { appBarItems } from '@/config/appBarItems'

// composables
import { useAppBarItems } from '@/composables/appBarItems'

// app bar item links
const { getTargetAttribute } = useAppBarItems()
</script>

<template>
  <ion-menu 
    content-id="main-content"
    side="end"
    type="reveal"
  >
    <ion-content 
      class="ion-padding"
      color="primary"
    >
      <ion-list>
        <ion-item 
          v-for="(item, index) in appBarItems"
          :key="`app-bar-menu-item-${index}`"
          color="primary"
          :detail="false"
          :href="item.url"
          lines="none"
          :target="getTargetAttribute(item.url)"
        >
          <ion-icon 
            slot="start"
            color="tertiary"
            :icon="item.icon"
          />
          <div
            class="menu-item-text"
            color="tertiary"
          >
            {{ item.text }}
          </div>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<style scoped>
ion-list{ 
  background-color: var(--ion-color-primary);
}

ion-item {
  --background: var(--ion-color-primary);
  --inner-padding-bottom: 1.1rem;
  --inner-padding-top: 1.1rem;
}

.menu-item-text {
  color: var(--ion-color-tertiary);
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.075rem;
}
</style>