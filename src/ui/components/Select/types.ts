import React from 'react'

export type SelectProps =
  React.InputHTMLAttributes<HTMLSelectElement> &
    React.PropsWithChildren & {
      label?: string
    }
