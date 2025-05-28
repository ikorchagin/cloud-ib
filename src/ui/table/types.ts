import React from 'react'

export interface BaseData {
  id: number
}

export interface TableColumn<T extends BaseData> {
  key: string
  title: string
  renderEl: (value: unknown, row: T) => React.JSX.Element
}

export interface TableRowAction<T extends BaseData> {
  icon: React.JSX.Element
  onAction: (row: T) => void
}

export interface TableProps<T extends BaseData> {
  columns: TableColumn<T>[]
  data: T[] | null | undefined
  rowActions?: TableRowAction<T>[]
  onSelectRow?: (row: T) => void
}

export type TableProviderProps<T extends BaseData> = TableProps<T> &
  React.PropsWithChildren

export type TableContextProps<T extends BaseData> = {
  table: TableProps<T>
  setTable: (tableProps: TableProps<T>) => void
}
