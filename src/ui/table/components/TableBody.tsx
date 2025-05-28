import React from 'react'

import { IconButton } from '@/ui/components/IconButton'

import { useTable } from '../hooks'
import type { TableRow } from '@/ui/table/types.ts'

export function TableBody<T extends Record<string, unknown>>() {
  const {
    table: { columns, data, rowActions, onSelectRow },
  } = useTable<T>()

  const renderRowActions = React.useCallback(
    (row: TableRow<T>) =>
      rowActions?.map(({ icon, onAction }) => (
        <td key={row.id}>
          <IconButton
            onClick={e => {
              e.stopPropagation()
              onAction(row)
            }}
          >
            {icon}
          </IconButton>
        </td>
      )),
    [rowActions],
  )

  const renderRows = React.useCallback(() => {
    return data?.map(row => {
      return (
        <tr key={`${row.id}`} onClick={() => onSelectRow?.(row)}>
          {columns.map(column => {
            const value = row?.[column.key]

            return (
              <td key={String(value)}>
                {column.renderEl(value, row)}
              </td>
            )
          })}
          {renderRowActions(row)}
        </tr>
      )
    })
  }, [columns, data, onSelectRow, renderRowActions])

  return <tbody>{renderRows()}</tbody>
}
