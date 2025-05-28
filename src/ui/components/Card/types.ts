import React from 'react'

export interface CardProps extends React.PropsWithChildren {
  label: string
  value: string
  icon: React.JSX.Element
}
