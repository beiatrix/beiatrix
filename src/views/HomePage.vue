<script setup lang="ts">
// ionic + vue
import { 
  IonContent,
  IonHeader,
  IonPage
} from '@ionic/vue'

// components
import AppBar from '@/components/AppBar.vue'
import AppBarMenu from '@/components/AppBarMenu.vue'
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
        <div id="container">
          <strong>🚧 Beep Boop! Under Construction. 🚧</strong>
        </div>
      </ion-content>
    </div>
  </ion-page>
</template>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-family: 'Manrope', Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
