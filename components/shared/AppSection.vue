<script setup lang="ts">
defineProps<{
  imgClasses: string
  imgUrl: string
  title: string
}>()
</script>

<template>
  <section class="mb-8">
    <header class="observer-target">
      <NuxtImg
        :alt="title"  
        :class="imgClasses"
        :src="imgUrl"
      />
    </header>
    <div class="observer-target leading-relaxed text-[17.6px] text-charcoal tracking-wide font-light">
      <slot />
    </div>
  </section>
</template>