<script setup lang="ts">
// ionic + vue
import {
  IonIcon,
  IonLabel,
  IonItem
} from '@ionic/vue'

// types
import { Item } from '@/types/item'

// props
interface Props {
  item: Item
}
defineProps<Props>()
</script>

<template>
  <ion-item lines="none">
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