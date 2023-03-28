export function useAppBarItems () {
  function getTargetAttribute (url: string | undefined) {
    return url?.includes('mailto') ? '' : '_blank'
  }

  return {
    getTargetAttribute
  }
}