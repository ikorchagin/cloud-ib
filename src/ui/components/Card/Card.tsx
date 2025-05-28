import { Paper } from '@/ui/components/Paper'

import styles from './Card.module.css'
import type { CardProps } from './types'

export function Card(props: CardProps) {
  const { label, icon, value } = props

  return (
    <Paper className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h4 className={styles.label}>{label}</h4>
      <span className={styles.value}>{value}</span>
    </Paper>
  )
}
