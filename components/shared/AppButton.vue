<script setup lang="ts">
withDefaults(defineProps<{
  href: string
  target?: string
}>(), {
  target: undefined
})
</script>

<template>
  <a 
    class="bg-mist hover:bg-mist-shade transition-all duration-200 text-creme text-xl tracking-wider font-accent font-semibold px-6 py-4 rounded-lg shadow-md"
    :href="href"
    :target="target"
  >
    <slot />
  </a>
</template>