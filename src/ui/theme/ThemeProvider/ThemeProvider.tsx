import React from 'react'

import { ThemeContext } from './ThemeContext'
import { useColorScheme } from '../useColorScheme'

export const ThemeProvider: React.FC<
  React.PropsWithChildren
> = props => {
  const { children } = props

  const { colorScheme } = useColorScheme()

  return <ThemeContext value={colorScheme}>{children}</ThemeContext>
}
