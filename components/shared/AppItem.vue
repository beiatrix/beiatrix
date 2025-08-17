<script setup lang="ts">
import type { Item, ItemType } from '@/types'

interface Props {
  animation?: boolean
  item: Partial<Item>
  type: ItemType
}
withDefaults(defineProps<Props>(), {
  animation: false
})
</script>

<template>
  <div 
    :class="{ 'hover:scale-110 ease-in-out transition-all duration-200': animation }"
    class="h-8 flex items-center my-4 gap-2"
  >
    <div class="h-full min-w-10 flex items-center justify-center">
      <div
        v-if="type === 'interest'"
        class="text-2xl"
      >
        {{ item.emoji }}
      </div>
      <Icon
        v-if="type === 'skill' && item.icon"
        class="block"
        :class="item.iconClass"
        size="24"
        :name="item.icon"
      />
    </div>
    <label class="text-base">
      {{ item.name }}
    </label>
  </div>
</template>