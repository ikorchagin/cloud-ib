import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { IconButton } from '@/ui/components/IconButton'

import { useColorScheme } from '../useColorScheme'

export const ThemeSwitcher: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <IconButton aria-label="Toggle theme" onClick={toggleColorScheme}>
      {colorScheme == 'light' ? <MdLightMode /> : <MdDarkMode />}
    </IconButton>
  )
}
