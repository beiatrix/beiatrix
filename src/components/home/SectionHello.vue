<script setup lang="ts">
// ionic + vue
import {
  IonCol,
  IonRow
} from '@ionic/vue'
</script>

<template>
  <ion-row class="ion-padding-top ion-justify-space-between">
    <ion-col
      class="header-content"
      size="12"
      size-md="7"
      size-xl="8"
    >
      <ion-row>
        <!-- <img
          :src="require('@/assets/images/hello.svg')"
          alt="hello"
          class="hello"
        /> -->
        <h2>hi there 👋</h2>
      </ion-row>
      <ion-row>
        <h1>
          my name is <span class="name">beiatrix</span>.
        </h1>
      </ion-row>
      <ion-row>
        <h2 class="ion-margin-bottom">
          I'm a 
          <span class="heading">software engineer</span>
          and 
          <span class="heading">designer</span>.
        </h2>
      </ion-row>
    </ion-col>
    <ion-col 
      class="container-headshot"
      size="12"
      size-md="5"
      size-xl="4"
    >
      <img
        src="https://beiatrix.s3.us-west-1.amazonaws.com/headshot/headshot.jpg"
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
  font-family: 'Manrope', Helvetica, Arial, sans-serif;
  font-weight: 500;
}

img.hello {
  height: 2.75rem;
  margin-right: -0.5rem;
  margin-bottom: 0.5rem;
}

img.headshot {
  border: 0.75rem solid var(--ion-color-tertiary-shade);
  max-height: 25vh;
  width: auto;
  object-fit: cover;
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

  img.hello {
    height: 3rem;
    margin-right: -0.5rem;
  }

  img.headshot {
    max-height: 30vh;
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

  img.hello {
    height: 2.5rem;
    margin-right: -0.5rem;
  }
}

/* mobile landscape */
@media (max-height: 600px) {
  img.headshot {
    border: 0.8rem solid var(--ion-color-tertiary);
    border-radius: 1.6rem;
    max-height: 50vh;
  }
}
</style>