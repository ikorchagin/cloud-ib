import React from 'react'

export type TableRow<T> = {
  id: number
} & T

export interface TableColumn<T> {
  key: string
  title: string
  renderEl: (value: unknown, row: TableRow<T>) => React.JSX.Element
}

export interface TableRowAction<T> {
  icon: React.JSX.Element
  onAction: (row: TableRow<T>) => void
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: TableRow<T>[] | null | undefined
  rowActions?: TableRowAction<T>[]
  onSelectRow?: (row: TableRow<T>) => void
}

export type TableProviderProps<T> = TableProps<T> &
  React.PropsWithChildren

export type TableContextProps<T> = {
  table: TableProps<T>
  setTable: (tableProps: TableProps<T>) => void
}
