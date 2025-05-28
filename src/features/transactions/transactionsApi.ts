import { api } from '@/app/api.ts'

import { TRANSACTIONS_TAG } from './constants'
import type {
  Transaction,
  TransactionsResponse,
} from '@/features/transactions/types.ts'

export const transactionsApi = api.injectEndpoints({
  endpoints: build => ({
    getTransactions: build.query<TransactionsResponse, undefined>({
      query: () => '/transactions',
      providesTags: [TRANSACTIONS_TAG],
    }),
    getTransactionById: build.query<Transaction, string>({
      query: id => `/transactions/${id}`,
      providesTags: (_result, _error, id) => [
        { type: TRANSACTIONS_TAG, id },
      ],
    }),
    addTransaction: build.mutation({
      query: newTransaction => ({
        url: '/transactions',
        method: 'POST',
        body: newTransaction,
      }),
      invalidatesTags: [TRANSACTIONS_TAG],
    }),
    deleteTransaction: build.mutation({
      query: id => ({
        url: `/transactions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TRANSACTIONS_TAG],
    }),
  }),
  overrideExisting: false,
})
