<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonRow
} from '@ionic/vue'

// config
import { skillItems } from '@/config/skillItems'
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

        <ion-item   
          v-for="(item, index) in value"
          :key="`technical-skill-item-${index}`"
          lines="none"
        >
          <img 
            v-if="item.logo"
            class="skill-item-img ion-margin-end"
            :alt="item.text" 
            :src="item.logo"
          />
          <ion-icon
            v-if="item.icon"
            class="ion-margin-end"
            :color="item.iconColor"
            :src="item.icon"
          />
          <ion-label class="item-label">
            {{ item.text }}
          </ion-label>
        </ion-item>
      </ion-item-group>
    </ion-col>
  </ion-row>
</template>

<style scoped>
.skill-item-thumbnail {
  background-color: none;
  max-height: 1.5rem;
  max-width: 1.5rem;
}

.skill-item-img {
  border-radius: 0.2rem;
  max-width: 1.5rem;
}

.item-type, .item-label {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
}

.item-type {
  color: var(--ion-color-primary-shade);
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
}
</style>