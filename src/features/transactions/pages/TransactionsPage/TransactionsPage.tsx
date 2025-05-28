import React from 'react'
import { useNavigate } from 'react-router'
import { MdAdd, MdClose } from 'react-icons/md'

import { useModal } from '@/ui/modal/hooks'
import { Table } from '@/ui/table'
import { Modal } from '@/ui/modal/components'
import { Button } from '@/ui/components/Button'
import type { TableColumn } from '@/ui/table/types'
import { ConfirmationDialog } from '@/ui/components/ConfirmationDialog'
import { IconButton } from '@/ui/components/IconButton'
import { Paper } from '@/ui/components/Paper'
import type { Transaction } from '@/features/transactions/types'
import {
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
} from '@/features/transactions/hooks'

import styles from './TransactionsPage.module.css'
import { TransactionForm } from '@/features/transactions/components/TransactionForm'
import { formatMoney } from '@/ui/utils.ts'

export function TransactionsPage() {
  const navigate = useNavigate()

  const {
    isOpen: isEditOpen,
    closeModal: closeEditModal,
    openModal: openEditModal,
  } = useModal()

  const {
    isOpen: isConfirmationOpen,
    closeModal: closeConfirmationModal,
    openModal: openConfirmationModal,
  } = useModal()

  const [selectedTransaction, setSelectedTransaction] =
    React.useState<Transaction | null>(null)

  const [deleteTransactionMutation] = useDeleteTransactionMutation()

  const handleDeleteTransaction = React.useCallback(async () => {
    if (!selectedTransaction) return

    await deleteTransactionMutation(selectedTransaction.id)

    closeConfirmationModal()
    setSelectedTransaction(null)
  }, [
    closeConfirmationModal,
    deleteTransactionMutation,
    selectedTransaction,
  ])

  const { data } = useGetTransactionsQuery(undefined, {})

  const handleRedirect = (transaction: Transaction) => {
    navigate(`/transactions/${transaction.id}`)
  }

  return (
    <Paper noPadding className={styles.container}>
      <div className={styles.header}>
        <IconButton onClick={openEditModal}>
          <MdAdd />
        </IconButton>
      </div>
      <Table
        columns={COLUMNS}
        data={data}
        rowActions={[
          {
            icon: <MdClose />,
            onAction(row) {
              setSelectedTransaction(row)
              openConfirmationModal()
            },
          },
        ]}
        onSelectRow={handleRedirect}
      />
      <ConfirmationDialog
        onConfirm={handleDeleteTransaction}
        isOpen={isConfirmationOpen}
        onClose={closeConfirmationModal}
      />
      <Modal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        size="medium"
      >
        <Modal.Title>Add Transaction</Modal.Title>
        <Modal.Content>
          <TransactionForm onSubmit={console.log} />
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={closeEditModal}>Cancel</Button>
          <Button
            onClick={() => {
              closeEditModal()
            }}
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </Paper>
  )
}

const COLUMNS: TableColumn<Transaction>[] = [
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

      return <>{formatMoney(numberValue)}</>
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
]
