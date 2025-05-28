import type { InputProps } from './types'
import styles from './Input.module.css'

export function Input(props: InputProps) {
  const { label, ...restProps } = props

  return (
    <label className={styles.label}>
      {label}
      <input className={styles.input} {...restProps} />
    </label>
  )
}
