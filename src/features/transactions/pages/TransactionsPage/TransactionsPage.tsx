import React from 'react'
import { useNavigate } from 'react-router'
import { MdAdd, MdClose } from 'react-icons/md'
import { useForm } from 'react-hook-form'

import { useModal } from '@/ui/modal/hooks'
import { Table } from '@/ui/table'
import { Modal } from '@/ui/modal/components'
import { Button } from '@/ui/components/Button'
import { ConfirmationDialog } from '@/ui/components/ConfirmationDialog'
import { IconButton } from '@/ui/components/IconButton'
import { Paper } from '@/ui/components/Paper'
import { Select } from '@/ui/components/Select'
import { TRANSACTIONS_TABLE_COLUMNS } from '@/features/transactions/constants.tsx'
import type {
  Transaction,
  TransactionFilter,
} from '@/features/transactions/types'
import {
  useAddTransactionMutation,
  useDeleteTransactionMutation,
  useGetTransactionsQuery,
  useTransactionCategories,
} from '@/features/transactions/hooks'

import styles from './TransactionsPage.module.css'
import { TransactionFormFields } from '../../components/TransactionFormFields'

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

  const [transactionFilter, setTransactionFilter] =
    React.useState<TransactionFilter>({})

  const { categories } = useTransactionCategories()

  const handleFilterChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const category = e.target.value

      if (!category || typeof category !== 'string') {
        return // If no category is selected, reset the filter
      }

      if (category === 'all') {
        setTransactionFilter({})
      } else {
        setTransactionFilter({ category })
      }
    },
    [],
  )

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

  const { data } = useGetTransactionsQuery(transactionFilter)
  const [addTransactionMutation] = useAddTransactionMutation()

  const handleRedirect = (transaction: Transaction) => {
    navigate(`/transactions/${transaction.id}`)
  }

  const { register, handleSubmit, reset } = useForm<Transaction>()

  const onSubmit = async (data: Transaction) => {
    await addTransactionMutation(data)
    closeEditModal()
  }

  const handleCloseEditModal = () => {
    closeEditModal()
    reset() // Reset the form fields when closing the modal)
  }

  return (
    <Paper noPadding className={styles.container}>
      <div className={styles.header}>
        <IconButton onClick={openEditModal}>
          <MdAdd />
        </IconButton>
        <Select size="small" onChange={handleFilterChange}>
          <Select.Option value="all">All</Select.Option>
          {categories.map(category => (
            <Select.Option key={category} value={category}>
              {category}
            </Select.Option>
          ))}
        </Select>
      </div>
      <Table
        columns={TRANSACTIONS_TABLE_COLUMNS}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Content>
            <TransactionFormFields register={register} />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={handleCloseEditModal}>Cancel</Button>
            <Button type="submit">Save</Button>
          </Modal.Actions>
        </form>
      </Modal>
    </Paper>
  )
}
