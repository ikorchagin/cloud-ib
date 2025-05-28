import { Input } from '@/ui/components/Input'
import { Select } from '@/ui/components/Select'

import type { TransactionFormFieldsProps } from './types'

export function TransactionFormFields(
  props: TransactionFormFieldsProps,
) {
  const { disabled = false, register } = props

  return (
    <>
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
    </>
  )
}
