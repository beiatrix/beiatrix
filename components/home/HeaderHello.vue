<script setup lang="ts">

</script>

<template>
  <header class="flex flex-col gap-6 xl:gap-12 sm:flex-row sm:justify-around my-2 sm:my-8 text-charcoal">
    <div>
      <NuxtImg
        alt="hello"
        class="h-16 md:h-20 w-auto -ms-3 sm:-ms-10 object-contain"
        src="/images/hello.svg"
      />
      <div class="pe-4 flex flex-col justify-around h-1/2">
        <h1 class="font-accent text-4xl md:text-5xl mb-3 md:mb-4 lg:mb-5 xl:mb-6 xl:mt-4">
          my name is
          <span class="inline-block text-primary mt-1">beiatrix</span>
        </h1>
        <h2 class="font-accent text-2xl md:text-3xl">
          I'm a
          <span class="text-primary">software engineer</span>
          &
          <span class="text-primary">designer</span>
        </h2>
      </div>
    </div>
    <div>
      <img
        alt="Beiatrix Pedrasa"
        class="h-64 w-auto mb-2 object-cover"
        src="/images/headshot.jpg"
      >
      <NuxtImg
        alt="thats-me"
        class="h-12 w-auto ms-32 mb-4 sm:mb-0 object-contain"
        src="/images/thats-me.svg"
      />
    </div>
  </header>
</template>


