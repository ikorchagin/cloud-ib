import { useCurrentTransaction } from '@/features/transactions/hooks/useCurrentTransaction.ts'

export function TransactionDetailsPage() {
  const { transaction, isLoading } = useCurrentTransaction()

  if (isLoading && !transaction) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Transaction Details</h2>
      <ul>
        <li>
          <strong>ID:</strong> {transaction?.id}
        </li>
        <li>
          <strong>Description:</strong> {transaction?.description}
        </li>
        <li>
          <strong>Amount:</strong> ${transaction?.amount}
        </li>
        <li>
          <strong>Type:</strong> {transaction?.type}
        </li>
        <li>
          <strong>Category:</strong> {transaction?.category}
        </li>
        <li>
          <strong>Date:</strong> {transaction?.date}
        </li>
      </ul>
    </div>
  )
}
