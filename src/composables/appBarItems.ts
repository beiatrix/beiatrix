export function useAppBarItems () {
  function getTargetAttribute (url: string) {
    return url.includes('mailto') ? '' : '_blank'
  }

  return {
    getTargetAttribute
  }
}