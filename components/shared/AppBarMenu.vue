<script setup lang="ts">
import { appBarItems } from '@/config/app-bar-items'
</script>

<template>
  <nav class="p-6 h-screen w-80 right-0 top-0 fixed bg-primary text-tertiary tracking-wider font-accent z-0">
    <a
      v-for="item in appBarItems"
      :key="item.name"
      :href="item.url"
      :target="item.url?.includes('http') ? '_blank' : undefined"
      class="flex items-center gap-2 hover:bg-forest hover:bg-opacity-10 w-full p-2 rounded-lg transition-colors duration-200"
    >
      <IconButton
        color="tertiary"
        :href="item.url"
        :icon="item.icon"
        :target="item.url?.includes('http') ? '_blank' : undefined"
      />
      {{ item.name }}
    </a>
  </nav>
</template>
