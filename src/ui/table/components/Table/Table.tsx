import { Paper } from '@/ui/components/Paper'
import { TableHeader } from '@/ui/table/components/TableHeader.tsx'
import { TableProvider } from '../TableProvider'
import { TableBody } from '@/ui/table/components/TableBody.tsx'
import { Button } from '@/ui/components/Button'

import styles from './Table.module.css'
import type { TableProps } from '@/ui/table/types.ts'

export function Table<T>(props: TableProps<T>) {
  const { columns, data } = props

  return (
    <TableProvider columns={columns} data={data}>
      <Paper noPadding className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <Button>Test</Button>
        </div>
        <table className={styles.table}>
          <TableHeader />
          <TableBody />
        </table>
      </Paper>
    </TableProvider>
  )
}
