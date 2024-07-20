<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonItemGroup,
  IonRow
} from '@ionic/vue'

// config
import { interestItems } from '@/config/interestItems'

// components
import SectionItem from './SectionItem.vue'
</script>

<template>
  <ion-row class="ion-padding-vertical">
    <ion-col
      class="observer-target"
      size="12"
    >
      <img
        :src="require('@/assets/images/interests.svg')"
        alt="interests"
        class="interests"
      >
    </ion-col>
    <ion-col
      class="observer-target"
      size="12"
    >
      <ion-item-group>
        <SectionItem
          v-for="(item, index) in interestItems"
          :key="`technical-skill-item-${index}`"
          :item="item"
        />
      </ion-item-group>
    </ion-col>
  </ion-row>
</template>

<style scoped>
img.interests {
  height: 3.5rem;
}
</style>
