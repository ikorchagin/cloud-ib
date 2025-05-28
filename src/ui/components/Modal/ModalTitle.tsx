import type { ModalTitleProps } from './types.ts'
import styles from './Modal.module.css'

export function ModalTitle(props: ModalTitleProps) {
  return (
    <div className={styles.modalTitle}>
      <h3 className={styles.title}>{props.children}</h3>
    </div>
  )
}
