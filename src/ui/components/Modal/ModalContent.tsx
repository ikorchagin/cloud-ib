import React from 'react'

import styles from './Modal.module.css'

export function ModalContent(props: React.PropsWithChildren) {
  const { children } = props

  return <div className={styles.modalContent}>{children}</div>
}
