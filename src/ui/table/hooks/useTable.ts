import React, { type Context } from 'react'

import type {
  TableContextProps,
  TableProps,
} from '@/ui/table/types.ts'
import { TableContext } from '@/ui/table/components/TableProvider'

export function useTable<T>() {
  const { table, setTable: setTableState } = React.useContext<
    TableContextProps<T>
  >(TableContext as Context<TableContextProps<T>>)

  const setTable = React.useCallback(
    (tableProps: TableProps<T>) => {
      setTableState({ ...table, ...tableProps })
    },
    [setTableState, table],
  )

  return {
    table,
    setTable,
  }
}
