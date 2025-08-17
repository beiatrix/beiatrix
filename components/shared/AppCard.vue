<script setup lang="ts">
import { technologyIcons } from '@/config/technology-icons'

withDefaults(defineProps<{
  githubUrl?: string
  imgUrl: string
  projectUrl: string
  subtitle: string
  technologies?: string[]
  title: string
}>(), {
  githubUrl: '',
  technologies: () => []
})
</script>

<template>
  <a 
    class="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 duration-300 ease-in-out cursor-pointer"
    :href="projectUrl"
    target="_blank"
  >
    <div class="flex justify-center items-center rounded-t-lg bg-secondary p-2">
      <NuxtImg
        :alt="title"
        :src="imgUrl"
        class="h-full w-auto object-cover rounded-sm"
      />
    </div>
    <div class="flex p-4 rounded-b-lg">
      <div class="flex-1">
        <h3 class="text-xl text-primary font-accent font-semibold leading-tight mb-1">{{ title }}</h3>
        <p class="text-xs text-secondary font-semibold uppercase leading-relaxed tracking-widest">{{ subtitle }}</p>
      </div>
      <div class="flex justify-end items-end">
        <div 
          v-for="technology in technologies"
          :key="`icon-${technology}`"
          v-tippy="technology"
          class="h-8 w-8 p-1"
        >
          <Icon
            class="h-6 w-6"
            :name="technologyIcons[technology as keyof typeof technologyIcons]"
          />
        </div>
        <IconButton
          v-if="githubUrl"
          v-tippy="'View on GitHub'"
          color="forest"
          icon="mdi:github"
          :href="githubUrl"
          size="sm"
          target="_blank"
        />
      </div>
    </div>
  </a>
</template>