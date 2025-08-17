<script setup lang="ts">
import { format } from 'date-fns'

const currentYear = computed(() => {
  return format(new Date(), 'yyyy')
})
</script>

<template>
  <footer class="h-16 bg-forest flex justify-center items-center">
    <div class="text-creme tracking-wider font-accent text-sm">© beiatrix {{ currentYear }}</div>
  </footer>
</template>
