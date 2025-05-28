import React from 'react'

import { TableContext } from './TableContext'
import type {
  BaseData,
  TableProps,
  TableProviderProps,
} from '../../types'

export function TableProvider<T extends BaseData>(
  props: TableProviderProps<T>,
) {
  const { children, ...initialProps } = props

  const [table, setTable] =
    React.useState<TableProps<T>>(initialProps)

  React.useEffect(() => {
    if (props.data?.length) {
      setTable(prevTable => ({
        ...prevTable,
        data: props.data,
      }))
    }
  }, [props.data?.length, props.data])

  return (
    <TableContext
      value={{
        // @ts-expect-error generics are not supported in context
        table,
        // @ts-expect-error generics are not supported in context
        setTable,
      }}
    >
      {children}
    </TableContext>
  )
}
