<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonImg,
  IonRow
} from '@ionic/vue'
</script>

<template>
  <ion-row class="ion-padding-top">
    <ion-col
      class="header-content"
      size="12"
      size-md="7"
      size-xl="8"
    >
      <ion-row>
        <ion-img
          :src="require('@/assets/images/hello.svg')"
          alt="hello"
          class="hello"
        />
        <h1>,</h1>
      </ion-row>
      <ion-row>
        <h1>
          my name is <span class="name">beiatrix</span>.
        </h1>
      </ion-row>
      <ion-row>
        <h2>
          I'm a 
          <span class="heading">software engineer</span>
          and 
          <span class="heading">designer</span>.
        </h2>
      </ion-row>
    </ion-col>
    <ion-col 
      size="12"
      size-md="5"
      size-xl="4"
    >
      <img
        src="https://i.imgur.com/iFc0B4c.jpg"
        alt="Beiatrix Pedrasa"
        class="headshot"
      />
    </ion-col>
  </ion-row>
</template>

<style scoped>
.header-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h1 {
  color: var(--ion-color-charcoal);
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 3.5rem;
  margin: 0;
}

h2 {
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
  font-weight: 500;
}

ion-img.hello {
  height: 3.5rem;
  margin-right: -0.5rem;
}

img.headshot {
  border: 1rem solid var(--ion-color-tertiary);
  max-height: 25vh;
}

.name {
  color: var(--ion-color-primary);
  font-weight: 700;
}

/* md */
@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  ion-img.hello {
    height: 2.5rem;
    margin-right: -0.5rem;
  }
}
</style>