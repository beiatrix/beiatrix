<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonRow
} from '@ionic/vue'

// config
import { skillItems } from '@/config/skillItems'

// components
import SectionItem from './SectionItem.vue'
</script>

<template>
  <ion-row class="ion-padding-vertical">
    <ion-col
      class="observer-target ion-margin-vertical"
      size="12"
    >
      <img
        :src="require('@/assets/images/skills.svg')"
        alt="skills"
        class="skills"
      >
    </ion-col>
    <ion-col
      v-for="(value, key) in skillItems"
      :key="`skill-group-${key}`"
      class="observer-target"
    >
      <ion-item-group>
        <ion-item-divider class="item-divider">
          <ion-label class="item-type bold uppercase">
            {{ key }}
          </ion-label>
        </ion-item-divider>

        <SectionItem
          v-for="(item, index) in value"
          :key="`technical-skill-item-${index}`"
          :animation="true"
          :item="item"
        />
      </ion-item-group>
    </ion-col>
  </ion-row>
</template>

<style scoped>
img.skills {
  height: 4rem;
}

.item-type {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
}

.item-type {
  color: var(--ion-color-primary-shade);
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}

.item-divider {
  background-color: rgba(203, 216, 209, 0.25); /* tertiary-shade */
  border-bottom: none;
  margin-bottom: 0.5rem;
}
</style>
