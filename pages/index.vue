<script setup lang=ts>
const isLoading = ref(true)

const {
  disconnectIntersectionObserver,
  observeTargets,
  setIntersectionObserver
} = useIntersectionObserver()

onMounted(() => {
  setIntersectionObserver()
  observeTargets()
  isLoading.value = false
})

onUnmounted(() => {
  disconnectIntersectionObserver()
})
</script>

<template>
  <Transition appear name="slide-fade">
    <div v-show="!isLoading">
      <HeaderHello />
      <SectionCareer />
      <SectionProjects />
      <SectionSkills />
      <SectionInterests />
    </div>
  </Transition>
</template>
