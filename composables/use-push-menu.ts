export function usePushMenu() {
  const windowWidth = ref()

  const showPushMenu = computed(() => {
    return windowWidth.value < 768 // md
  })

  function setWindowWidth () {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    setWindowWidth()
    window.addEventListener('resize', () => {
      setWindowWidth()
    })
  })

  return {
    showPushMenu
  }
}
