import type { TableColumn } from '@/ui/table/types.ts'
import type { Transaction } from '@/features/transactions/types.ts'
import { formatMoney } from '@/ui/utils.ts'

export const TRANSACTIONS_TAG = 'Transactions'

export const TransactionType = {
  INCOME: 'income',
  EXPENSE: 'expense',
}

export const TRANSACTIONS_TABLE_COLUMNS: TableColumn<Transaction>[] =
  [
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
