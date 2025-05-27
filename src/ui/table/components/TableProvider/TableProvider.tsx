import React from 'react'

import { TableContext } from './TableContext'
import type { TableProps, TableProviderProps } from '../../types'

export function TableProvider<T>(props: TableProviderProps<T>) {
  const { children, data, columns } = props

  const [table, setTable] = React.useState<TableProps<T>>({
    columns,
    data,
  })

  React.useEffect(() => {
    if (data?.length) {
      setTable(prevTable => ({
        ...prevTable,
        data,
      }))
    }
  }, [data?.length, data])

  return (
    <TableContext
      value={{
        // @ts-expect-error Context doesn't need to know about generics
        table,
        // @ts-expect-error Context doesn't need to know about generics
        setTable,
      }}
    >
      {children}
    </TableContext>
  )
}
