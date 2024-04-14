<script setup lang="ts">
// ionic + vue
import {
  IonIcon,
  IonLabel,
  IonItem
} from '@ionic/vue'

// types
import { Item } from '@/types'

// props
interface Props {
  animation?: boolean
  item: Item
}
withDefaults(defineProps<Props>(), {
  animation: false
})
</script>

<template>
  <ion-item 
    :class="`${animation ? 'animation' : ''}`"
    color="creme"
    lines="none"
  >
    <div
      v-if="item.emoji"
      class="item-emoji ion-margin-end"
    >
      {{ item.emoji }}
    </div>
    <ion-icon
      v-if="item.icon"
      class="ion-margin-end"
      :color="item.iconColor"
      :src="item.icon"
    />
    <img 
      v-if="item.logo"
      class="item-img ion-margin-end"
      :alt="item.text" 
      :src="item.logo"
    />
    <ion-label class="item-label ion-text-wrap">
      {{ item.text }}
    </ion-label>
  </ion-item>
</template>

<style scoped>
ion-item.animation {
  transition: transform .2s; /* Animation */
}

ion-item.animation:hover {
  transform: scale(1.1); /* (110% zoom) */
}

.item-emoji {
  font-size: 1.5rem;
}

.item-img {
  border-radius: 0.2rem;
  max-width: 1.5rem;
}

.item-label {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
}
</style>