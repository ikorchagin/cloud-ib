import React from 'react'

import { useTable } from '@/ui/table/hooks/useTable.ts'

export function TableBody<T>() {
  const {
    table: { columns, data },
  } = useTable<T>()

  const renderRows = React.useCallback(() => {
    return data?.map(row => {
      return (
        <tr>
          {columns.map(column => {
            const value = row?.[column.key]

            return (
              <td key={String(value)}>
                {column.renderEl(value, row)}
              </td>
            )
          })}
        </tr>
      )
    })
  }, [columns, data])

  return <tbody>{renderRows()}</tbody>
}
