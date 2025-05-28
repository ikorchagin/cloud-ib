import React from 'react'

import type { TableContextProps } from '../../types'

export const TableContext = React.createContext<
  TableContextProps<{ id: number } & Record<string, unknown>>
>({
  table: {
    data: null,
    columns: [],
    rowActions: [],
  },
  setTable: () => {},
})
