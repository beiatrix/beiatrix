<script setup lang="ts">
import { skillItems } from '@/config/skill-items'
</script>

<template>
  <AppSection
    img-classes="h-16 mb-8"
    img-url="/images/skills.svg"
    title="skills"
  >
    <div class="flex flex-wrap -mx-1">
      <div 
        v-for="(value, property) in skillItems" 
        :key="`skill-group-${property}`"
        class="w-1/2 md:w-1/3 flex-grow p-1"
      >
        <header class="bg-tertiary-shade bg-opacity-25 uppercase font-semibold tracking-widest text-primary-shade text-sm p-3">
          {{ property }}
        </header>
        <AppItem
          v-for="item in value"
          :key="`skill-item-${item.name}`"
          animation
          :item
          type="skill"
        />
      </div>
    </div>
  </AppSection>
</template>
