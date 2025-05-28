import * as React from 'react'

import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'error' | 'success'

export interface ButtonProps extends React.PropsWithChildren {
  variant?: ButtonVariant
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const Button: React.FC<ButtonProps> = props => {
  const {
    variant = 'primary',
    onClick = () => console.log('TEST'),
    children,
  } = props

  return (
    <button
      className={`${styles.button} ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
