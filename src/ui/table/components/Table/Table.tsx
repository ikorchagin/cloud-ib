import { Paper } from '@/ui/components/Paper'
import { TableHeader } from '@/ui/table/components/TableHeader.tsx'
import { TableProvider } from '../TableProvider'
import { TableBody } from '@/ui/table/components/TableBody.tsx'
import type { BaseData, TableProps } from '@/ui/table/types.ts'

import styles from './Table.module.css'
import { IconButton } from '@/ui/components/IconButton'
import { MdAdd } from 'react-icons/md'

export function Table<T extends BaseData>(props: TableProps<T>) {
  return (
    <TableProvider {...props}>
      <Paper noPadding className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <IconButton>
            <MdAdd />
          </IconButton>
        </div>
        <table className={styles.table}>
          <TableHeader />
          <TableBody />
        </table>
      </Paper>
    </TableProvider>
  )
}
