<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonRow
} from '@ionic/vue'
</script>

<template>
  <ion-row class="ion-padding-top ion-justify-space-between ion-margin-bottom">
    <ion-col
      class="header-content"
      size="12"
      size-md="7"
      size-xl="8"
    >
      <ion-row>
        <img
          :src="require('@/assets/images/hello.svg')"
          alt="hello"
          class="hello"
        >
      </ion-row>
      <ion-row>
        <h1>
          my name is <span class="name">beiatrix</span>
        </h1>
      </ion-row>
      <ion-row>
        <h2 class="ion-margin-bottom">
          I'm a
          <span class="highlight">software engineer</span>
          +
          <span class="highlight">designer</span>!
        </h2>
      </ion-row>
    </ion-col>
    <ion-col
      class="container-headshot ion-margin-bottom"
      size="12"
      size-md="5"
      size-xl="4"
    >
      <img
        :src="require('@/assets/images/headshot.jpg')"
        alt="Beiatrix Pedrasa"
        class="headshot"
      >
      <img
        :src="require('@/assets/images/thats-me.svg')"
        alt="thats-me"
        class="thats-me"
      >
    </ion-col>
  </ion-row>
</template>

<style scoped>
.header-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.container-headshot {
  display: flex;
  justify-content: flex-end;
}

h1 {
  color: rgba(var(--ion-color-charcoal-rgb), 0.9);
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 3rem;
  margin: 0;
}

h2 {
  color: rgba(var(--ion-color-charcoal-rgb), 0.9);
  font-family: 'Quicksand', Helvetica, Arial, sans-serif;
  font-weight: 500;
}

.highlight {
  color: var(--ion-color-primary);
}

img.hello {
  height: 5rem;
  margin-left: -2.5rem;
  margin-bottom: -0.5rem;
}

img.headshot {
  max-height: 25vh;
  width: auto;
  object-fit: cover;
}

img.thats-me {
  margin-top: 26vh;
  margin-right: -4rem;
  height: 3rem;
  position: absolute;
}

.name {
  color: var(--ion-color-primary);
  font-weight: 700;
}

/* lg */
@media (max-width: 992px) {
  h1 {
    font-size: 3rem;
  }

  img.headshot {
    max-height: 30vh;
  }

  img.thats-me {
    margin-top: 30vh;
    margin-left: 30vw;
  }
}

/* md */
@media (max-width: 768px) {
  .container-headshot {
    justify-content: start;
  }

  h1 {
    font-size: 2.5rem;
  }
}

/* sm */
@media (max-width: 576px) {
  img.hello {
    margin-left: -1rem;
    margin-bottom: 0;
    margin-top: -1rem;
  }
}

/* mobile landscape */
@media (max-height: 600px) {
  img.headshot {
    max-height: 50vh;
  }
}
</style>
