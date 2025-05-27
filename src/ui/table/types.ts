import React from 'react'

export type TableRow<T> = Record<string, T>

export interface TableColumn<T> {
  key: string
  title: string
  renderEl: (value: unknown, row: TableRow<T>) => React.JSX.Element
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: TableRow<T>[] | null | undefined
}

export type TableProviderProps<T> = TableProps<T> &
  React.PropsWithChildren

export type TableContextProps<T> = {
  table: TableProps<T>
  setTable: (tableProps: TableProps<T>) => void
}
