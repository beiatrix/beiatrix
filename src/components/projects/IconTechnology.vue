<script setup lang="ts">
// ionic + vue
import { IonIcon } from '@ionic/vue'
import { computed } from 'vue'

// types
import { Item } from '@/types'

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
 * computed
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
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: start;
}

ion-icon {
  margin-right: 0.5rem;
}

img {
  max-width: 1.5rem;
  margin-right: 0.5rem;
}
</style>