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
  <ion-row class="ion-padding-vertical ion-justify-space-between">
    <ion-col size="12">
      <div class="header">
        <h1 class="heading">
          skills
        </h1>
      </div>
    </ion-col>
    <ion-col
      v-for="(value, key) in skillItems"
      :key="`skill-group-${key}`"
    >
      <ion-item-group>
        <ion-item-divider color="tertiary">
          <ion-label class="item-type bold uppercase">
            {{ key }}
          </ion-label>
        </ion-item-divider>

        <SectionItem
          v-for="(item, index) in value"
          :key="`technical-skill-item-${index}`"
          :item="item"
        />
      </ion-item-group>
    </ion-col>
  </ion-row>
</template>

<style scoped>
.item-type {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
}

.item-type {
  color: var(--ion-color-primary-shade);
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}
</style>