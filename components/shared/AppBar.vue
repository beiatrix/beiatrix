<script setup lang="ts">
import { appBarItems } from '@/config/app-bar-items'

defineEmits<{
  toggleMenu: []
}>()

const { showPushMenu } = usePushMenu()
</script>

<template>
  <nav class="flex bg-tertiary text-primary p-4">
    <div class="flex-1">
      <IconButton
        href="/"
        icon="custom:beiatrix-logo"
      />
    </div>

    <IconButton
      v-if="showPushMenu"
      icon="ion:menu"
      @click="$emit('toggleMenu')"
    />

    <IconButton
      v-for="item in appBarItems"
      v-else
      :key="item.name"
      :href="item.url"
      :icon="item.icon"
      :target="item.url?.includes('http') ? '_blank' : undefined"
    />
  </nav>
</template>
