import React from 'react'
import ReactDOM from 'react-dom'

import { Paper } from '@/ui/components/Paper'

import type { ModalProps } from './types.ts'
import styles from './Modal.module.css'

const sizesMap = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
}

export function Modal(props: ModalProps) {
  const {
    isOpen,
    onClose,
    size = 'large',
    fullHeight,
    children,
  } = props

  React.useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <Paper
        noPadding
        className={`${styles.modalRoot} ${sizesMap[size]} ${fullHeight ? styles.fullHeight : ''}`}
      >
        <div className={styles.modalContainer}>{children}</div>
      </Paper>
    </>,
    document.body,
  )
}
