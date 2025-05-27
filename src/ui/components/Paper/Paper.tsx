import React from 'react'

import styles from './Paper.module.css'

export interface PaperProps extends React.PropsWithChildren {
  className?: string
  noPadding?: boolean
  ref?: React.Ref<HTMLDivElement>
}

export const Paper: React.FC<PaperProps> = props => {
  const {
    noPadding = false,
    children,
    ref,
    className: customClassName,
  } = props

  const className = noPadding
    ? `${styles.paper} ${styles.noPadding}`
    : styles.paper

  return (
    <div ref={ref} className={`${className} ${customClassName}`}>
      {children}
    </div>
  )
}
