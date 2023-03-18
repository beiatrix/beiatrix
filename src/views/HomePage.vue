<script setup lang="ts">
// ionic + vue
import { 
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow
} from '@ionic/vue'

// components
import AppBar from '@/components/AppBar.vue'
import AppBarMenu from '@/components/AppBarMenu.vue'
import AppFooter from '@/components/AppFooter.vue'
import SectionHello from '@/components/SectionHello.vue'
</script>

<template>
  <ion-page>
    <AppBarMenu />
    <div
      class="ion-page"
      id="main-content"
    >
      <ion-header class="ion-no-border">
        <AppBar />
      </ion-header>

      <ion-content :fullscreen="true">
        <ion-grid class="container">
          <ion-row class="ion-justify-content-center ion-padding">
            <ion-col
              class="ion-padding"
              size="12"
              size-sm="10"
              size-md="8"
              size-xl="6"
            >
              <SectionHello />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>

      <AppFooter />
    </div>
  </ion-page>
</template>

<style scoped>
.container {
  background-color: var(--ion-color-creme);
  height: 100%;
}
</style>
