import React from 'react'

import styles from './IconButton.module.css'

export interface IconButtonProps extends React.PropsWithChildren {
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
}

export const IconButton: React.FC<IconButtonProps> = props => {
  const { onClick, children, type = 'button' } = props

  return (
    <button
      type={type}
      className={styles.iconButton}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
