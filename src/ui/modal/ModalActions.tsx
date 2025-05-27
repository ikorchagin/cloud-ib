import React from 'react'

import styles from './Modal.module.css'

export function ModalActions(props: React.PropsWithChildren) {
  const { children } = props

  return <div className={styles.modalActions}>{children}</div>
}
