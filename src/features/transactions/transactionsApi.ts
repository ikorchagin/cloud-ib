import { api } from '@/app/api.ts'

import { TRANSACTIONS_TAG } from './constants.tsx'
import type {
  Transaction,
  TransactionFilter,
  TransactionsResponse,
} from '@/features/transactions/types.ts'

export const transactionsApi = api.injectEndpoints({
  endpoints: build => ({
    getTransactions: build.query<
      TransactionsResponse,
      TransactionFilter | undefined
    >({
      query: filter =>
        `/transactions${filter?.category ? '?category=' + filter?.category : ''}`,
      providesTags: [{ type: TRANSACTIONS_TAG, id: 'LIST' }],
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
    editTransaction: build.mutation({
      query: ({ id, ...updatedTransaction }) => ({
        url: `/transactions/${id}`,
        method: 'PUT',
        body: updatedTransaction,
      }),
      invalidatesTags: (_result, _error, { id }) => [
        { type: TRANSACTIONS_TAG, id },
        { type: TRANSACTIONS_TAG, id: 'LIST' },
      ],
    }),
  }),
  overrideExisting: false,
})
