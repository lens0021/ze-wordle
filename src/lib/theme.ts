const getTheme = () => {
  if (window.location.pathname) {
    const m = window.location.pathname.match(/^\/(.+)$/)
    if (m && m[1]) {
      return m[1]
    }
  }
  return ''
}

export const theme = getTheme()
