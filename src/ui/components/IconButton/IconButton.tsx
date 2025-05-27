import React from 'react'

import styles from './IconButton.module.css'

export interface IconButtonProps extends React.PropsWithChildren {
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

export const IconButton: React.FC<IconButtonProps> = props => {
  const {
    onClick = () => console.log('IconButton clicked'),
    children,
  } = props

  return (
    <button className={styles.iconButton} onClick={onClick}>
      {children}
    </button>
  )
}
