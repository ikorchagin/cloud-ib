import type { UseFormProps } from 'react-hook-form'

import type { Transaction } from '../../types'

export type TransactionFormProps = UseFormProps<Transaction> & {
  onSubmit: (data: Transaction) => void
  disabled?: boolean
}
