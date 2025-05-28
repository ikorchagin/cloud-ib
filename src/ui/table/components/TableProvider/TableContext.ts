import React from 'react'

import type { TableContextProps } from '../../types'

export const TableContext = React.createContext<
  TableContextProps<{ id: number }>
>({
  table: {
    data: null,
    columns: [],
    rowActions: [],
  },
  setTable: () => {},
})
