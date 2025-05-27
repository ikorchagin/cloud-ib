import { transactionsApi } from '../transactionsApi'

export const {
  useGetTransactionsQuery,
  useGetTransactionByIdQuery,
  useAddTransactionMutation,
  useDeleteTransactionMutation,
} = transactionsApi
