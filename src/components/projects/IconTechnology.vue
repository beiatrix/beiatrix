<script setup lang="ts">
// ionic + vue
import { IonIcon } from '@ionic/vue'
import { computed } from 'vue'

// types
import { Item } from '@/types'

// popover
import { Tippy } from 'vue-tippy'

// config
import { technicalSkillItems } from '@/config/skillItems'

/**
 * props
 * ================================================================
 */
interface Props {
  technologyName: string
}
const props = defineProps<Props>()

/**
 * technology
 * ================================================================
 */
const technologies = computed(() => {
  return technicalSkillItems.reduce((technologies, item) => {
    technologies[item.text] = item
    return technologies
  }, {} as { [key: string]: Item })
})

const technologyItem = computed(() => {
  return technologies.value[props.technologyName]
})
</script>

<template>
  <Tippy>
    <div class="container">
      <ion-icon
        v-if="technologyItem.icon"
        :color="technologyItem.iconColor"
        :src="technologyItem.icon"
      />
      <img
        v-if="technologyItem.logo"
        :alt="technologyItem.text"
        :src="technologyItem.logo"
      >
    </div>
    <template #content>
      {{ technologyItem.text }}
    </template>
  </Tippy>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

img {
  border-radius: 0.2rem;
  max-width: 1.5rem;
}

ion-icon {
  font-size: 1.5rem;
}
</style>
