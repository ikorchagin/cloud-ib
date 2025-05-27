import React from 'react'

import type { TableContextProps } from '../../types'

export const TableContext = React.createContext<
  TableContextProps<unknown>
>({
  table: {
    data: null,
    columns: [],
  },
  setTable: () => {},
})
