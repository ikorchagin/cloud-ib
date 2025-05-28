import { TableHeader } from '../TableHeader'
import { TableBody } from '../TableBody'
import { TableProvider } from '../TableProvider'
import type { TableProps } from '../../types'

import styles from './Table.module.css'

export function Table<T>(props: TableProps<T>) {
  return (
    <TableProvider {...props}>
      <table className={styles.table}>
        <TableHeader />
        <TableBody />
      </table>
    </TableProvider>
  )
}
