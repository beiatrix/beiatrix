<script setup lang="ts">
 withDefaults(defineProps<{
  color?: string
  href?: string
  icon: string
  size?: 'sm' | 'md'
  target?: string
}>(), {
  color: 'primary',
  href: undefined,
  size: 'md',
  target: undefined
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :class="{
      'h-8 w-8': size === 'sm',
      'h-12 w-12': size === 'md'
    }"
    class="hover:bg-primary hover:bg-opacity-5 rounded-full flex items-center justify-center"
    :href="href"
    :target="target"
  >
    <Icon
      :class="`h-6 w-6 text-${color}`"
      :name="icon"
    />
  </component>
</template>
