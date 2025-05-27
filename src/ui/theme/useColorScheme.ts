import React, { useEffect } from 'react'

import type { ColorScheme } from '@/ui/theme/types.ts'

export const useColorScheme = () => {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
  )

  const toggleColorScheme = React.useCallback(
    () =>
      setColorScheme(prev => (prev === 'light' ? 'dark' : 'light')),
    [],
  )

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', colorScheme)
  }, [colorScheme])

  return {
    colorScheme,
    toggleColorScheme,
    setColorScheme,
  }
}
