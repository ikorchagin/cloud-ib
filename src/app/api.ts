import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

import { TRANSACTIONS_TAG } from '@/features/transactions/constants.tsx'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  endpoints: () => ({}),
  tagTypes: [TRANSACTIONS_TAG],
})
