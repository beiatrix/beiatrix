// vue
import { ref } from 'vue'

/**
 * use IntersectionObserver to support animations on scroll into view
 */
export function useIntersectionObserver () {
  // state
  const observer = ref<IntersectionObserver>()

  // methods
  function setIntersectionObserver () {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-fade')
        }    
      })
    })
  }

  function observeTargets () {
    const target = '.observer-target'
    document.querySelectorAll(target).forEach((element) => {
      if (element) {
        observer.value?.observe(element)
      }
    })
  }
  
  function disconnectIntersectionObserver () {
    observer.value?.disconnect()
  }

  return {
    disconnectIntersectionObserver,
    observeTargets,
    setIntersectionObserver
  }
}