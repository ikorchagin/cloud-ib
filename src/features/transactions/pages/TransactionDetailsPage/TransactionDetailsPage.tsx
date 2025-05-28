import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { MdCheck, MdClose, MdEdit } from 'react-icons/md'

import { Paper } from '@/ui/components/Paper'
import { IconButton } from '@/ui/components/IconButton'
import {
  useCurrentTransaction,
  useEditTransactionMutation,
} from '@/features/transactions/hooks'

import { TransactionFormFields } from '../../components/TransactionFormFields'
import styles from './TransactionDetailsPage.module.css'
import { useEditState } from './hooks'
import type { Transaction } from '@/features/transactions/types.ts'

export function TransactionDetailsPage() {
  const { transaction, isLoading } = useCurrentTransaction()
  const [editTransactionMutation] = useEditTransactionMutation()

  const { handleSubmit, register, reset } = useForm({
    defaultValues: transaction,
  })

  React.useEffect(() => {
    if (transaction) {
      reset(transaction)
    }
  }, [transaction, reset])

  const { isEditing, toggleEdit } = useEditState(reset)

  const onSubmit: SubmitHandler<Transaction> = React.useCallback(
    async data => {
      await editTransactionMutation(data)
      toggleEdit()
    },
    [editTransactionMutation, toggleEdit],
  )

  if (isLoading && !transaction) {
    return <div>Loading...</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Transaction #{transaction?.id}
          </h1>

          <div className={styles.actions}>
            {isEditing && (
              <IconButton type="submit">{<MdCheck />}</IconButton>
            )}
            <IconButton onClick={toggleEdit}>
              {isEditing ? <MdClose /> : <MdEdit />}
            </IconButton>
          </div>
        </div>
        <TransactionFormFields
          register={register}
          disabled={!isEditing}
        />
      </Paper>
    </form>
  )
}
