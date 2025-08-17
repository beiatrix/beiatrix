<script setup lang="ts">
// menu
const { showPushMenu } = usePushMenu()

const isMenuOpen = ref(false)

function handleMenuToggle(isOpen: boolean) {
  isMenuOpen.value = isOpen
}

// prevent body scroll when menu is open
watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <AppBarMenu v-if="showPushMenu" />

    <div
      class="transition-transform duration-300 ease-in-out absolute top-0 left-0 w-full min-h-screen bg-creme z-50"
      :class="{ '-translate-x-80': isMenuOpen }"
    >
      <header class="sticky top-0 z-10">
        <AppBar @toggle-menu="handleMenuToggle(!isMenuOpen)" />
      </header>

      <main
        class="sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto min-h-screen p-12 sm:p-6"
        @click="isMenuOpen && handleMenuToggle(false)"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
