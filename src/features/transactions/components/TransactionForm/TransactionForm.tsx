import { useForm } from 'react-hook-form'

import { Input } from '@/ui/components/Input'
import { Select } from '@/ui/components/Select'

import styles from './TransactionForm.module.css'
import type { TransactionFormProps } from './types'
import type { Transaction } from '../../types'

export function TransactionForm(props: TransactionFormProps) {
  const { onSubmit, disabled = false, ...restProps } = props

  const { handleSubmit, register } = useForm<Transaction>(restProps)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Description"
        type="text"
        required
        disabled={disabled}
        {...register('description')}
      />

      <Input
        label="Amount"
        type="number"
        required
        disabled={disabled}
        {...register('amount')}
      />
      <Select
        label="Type"
        required
        disabled={disabled}
        {...register('type')}
      >
        <Select.Option value="income">Income</Select.Option>
        <Select.Option value="expense">Expense</Select.Option>
      </Select>
      <Input
        label="Category"
        type="text"
        required
        disabled={disabled}
        {...register('category')}
      />
      <Input
        label="Date"
        type="date"
        required
        disabled={disabled}
        {...register('date')}
      />
    </form>
  )
}
