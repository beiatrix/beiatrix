<script setup lang="ts">
defineProps<{
  title: string
  level: number
}>();
</script>

<template>
  <h3 
    v-if="level === 3"
    class="text-xl font-semibold text-dark scroll-mt-24"
  >
    {{ title }}
  </h3>
  <h4 
    v-if="level === 4"
    class="text-lg font-semibold text-dark scroll-mt-24"
  >
    {{ title }}
  </h4>
</template>