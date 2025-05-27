// Transactions response type
export interface Transaction {
  id: number
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string // ISO 8601 date format
}

// Response type for transactions
export type TransactionsResponse = Transaction[]
