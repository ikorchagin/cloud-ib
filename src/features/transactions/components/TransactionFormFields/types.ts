import type { UseFormRegister } from 'react-hook-form'

import type { Transaction } from '@/features/transactions/types'

export type TransactionFormFieldsProps = {
  disabled?: boolean
  register: UseFormRegister<Transaction>
}
