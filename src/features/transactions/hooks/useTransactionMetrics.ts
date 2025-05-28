import React from 'react'

import { useGetTransactionsQuery } from '@/features/transactions/hooks'

import { TransactionType } from '../constants'

export function useTransactionMetrics() {
  const { data, isLoading } = useGetTransactionsQuery(undefined, {})

  const totalBalance = React.useMemo(
    () =>
      data?.reduce(
        (sum, transaction) => sum + transaction.amount,
        0,
      ) || 0,
    [data],
  )

  const totalIncome = React.useMemo(
    () =>
      data?.reduce(
        (sum, transaction) =>
          sum +
          (transaction.type === TransactionType.INCOME
            ? transaction.amount
            : 0),
        0,
      ) || 0,
    [data],
  )

  const totalExpense = React.useMemo(
    () =>
      data?.reduce(
        (sum, transaction) =>
          sum +
          (transaction.type === TransactionType.EXPENSE
            ? transaction.amount
            : 0),
        0,
      ) || 0,
    [data],
  )

  return {
    totalBalance,
    totalIncome,
    totalExpense,
    isLoading,
  }
}
