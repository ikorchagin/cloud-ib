import React from 'react'
import { MdClose } from 'react-icons/md'

import { Table } from '@/ui/table'
import type { TableColumn } from '@/ui/table/types'
import type { Transaction } from '@/features/transactions/types'
import {
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
} from '@/features/transactions/hooks'
import { ConfirmationDialog } from '@/ui/components/ConfirmationDialog'

export function TransactionsPage() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedTransaction, setSelectedTransaction] =
    React.useState<Transaction | null>(null)

  const [deleteTransactionMutation] = useDeleteTransactionMutation()

  const columns: TableColumn<Transaction>[] = React.useMemo(
    () => [
      {
        title: 'ID',
        key: 'id',
        renderEl: value => <>{value}</>,
      },
      {
        title: 'Description',
        key: 'description',
        renderEl: value => <>{value}</>,
      },
      {
        title: 'Amount',
        key: 'amount',
        renderEl: value => {
          const numberValue = Number(value)

          return (
            <>
              {numberValue < 0
                ? `-$${Math.abs(numberValue)}`
                : `$${numberValue}`}
            </>
          )
        },
      },
      {
        title: 'Type',
        key: 'type',
        renderEl: value => {
          if (typeof value !== 'string') {
            return <>{value}</>
          }

          return (
            <span
              style={{
                textTransform: 'capitalize',
                color:
                  value === 'income'
                    ? 'var(--color-success)'
                    : 'var(--color-error)',
              }}
            >
              {value}
            </span>
          )
        },
      },
      {
        title: 'Category',
        key: 'category',
        renderEl: value => <>{value}</>,
      },
      {
        title: 'Date',
        key: 'date',
        renderEl: value => {
          if (typeof value !== 'string') {
            return <>{value}</>
          }
          return <>{new Date(value).toLocaleDateString()}</>
        },
      },
    ],
    [],
  )

  const handleDeleteTransaction = React.useCallback(async () => {
    if (!selectedTransaction) return

    await deleteTransactionMutation(selectedTransaction.id)

    setIsOpen(false)
    setSelectedTransaction(null)
  }, [deleteTransactionMutation, selectedTransaction])

  const { data } = useGetTransactionsQuery(undefined, {})

  return (
    <>
      <Table
        columns={columns}
        data={data}
        rowActions={[
          {
            icon: <MdClose />,
            onAction(row) {
              setSelectedTransaction(row)
              setIsOpen(true)
            },
          },
        ]}
      />
      <ConfirmationDialog
        onConfirm={handleDeleteTransaction}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}
