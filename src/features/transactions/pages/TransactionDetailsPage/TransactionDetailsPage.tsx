import { MdEdit } from 'react-icons/md'

import { Paper } from '@/ui/components/Paper'
import { IconButton } from '@/ui/components/IconButton'
import { useCurrentTransaction } from '@/features/transactions/hooks'
import { TransactionForm } from '@/features/transactions/components/TransactionForm'

import styles from './TransactionDetailsPage.module.css'

export function TransactionDetailsPage() {
  const { transaction, isLoading } = useCurrentTransaction()

  if (isLoading && !transaction) {
    return <div>Loading...</div>
  }

  return (
    <Paper className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Transaction #{transaction?.id}
        </h1>
        <IconButton onClick={() => {}}>
          <MdEdit />
        </IconButton>
      </div>
      <TransactionForm
        onSubmit={console.log}
        defaultValues={transaction}
        disabled
      />
    </Paper>
  )
}
