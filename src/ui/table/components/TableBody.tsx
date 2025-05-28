import React from 'react'

import { IconButton } from '@/ui/components/IconButton'

import { useTable } from '../hooks'
import type { BaseData } from '../types'

export function TableBody<T extends BaseData>() {
  const {
    table: { columns, data, rowActions, onSelectRow },
  } = useTable<T>()

  const renderRowActions = React.useCallback(
    (row: T) =>
      rowActions?.map(({ icon, onAction }) => (
        <td key={row.id}>
          <IconButton onClick={() => onAction(row)}>
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
          <td
            style={{ display: 'flex', flexDirection: 'row-reverse' }}
          >
            {renderRowActions(row)}
          </td>
        </tr>
      )
    })
  }, [columns, data, onSelectRow, renderRowActions])

  return <tbody>{renderRows()}</tbody>
}
