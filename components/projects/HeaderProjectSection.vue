<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <header>
    <h2 class="text-2xl font-semibold mt-1 mb-3 text-dark scroll-mt-24">
      {{ title }}
    </h2>
    <div class="h-0.5 w-full bg-secondary" />
  </header>
</template>