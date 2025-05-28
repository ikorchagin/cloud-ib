import React from 'react'

export type SelectProps = {
  label?: string
  size?: 'small' | 'medium'
} & Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'size'> &
  React.PropsWithChildren
