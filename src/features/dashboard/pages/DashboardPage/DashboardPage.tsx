import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaWallet,
} from 'react-icons/fa'

import { Card } from '@/ui/components/Card/Card.tsx'
import { formatMoney } from '@/ui/utils'
import { useTransactionMetrics } from '@/features/transactions/hooks'

import styles from './DashboardPage.module.css'

export function DashboardPage() {
  const { totalIncome, totalExpense, totalBalance } =
    useTransactionMetrics()

  return (
    <div className={styles.container}>
      <Card
        label="Total Income"
        value={String(formatMoney(totalIncome))}
        icon={<FaArrowCircleDown />}
      />
      <Card
        label="Total Expenses"
        value={String(formatMoney(totalExpense))}
        icon={<FaArrowCircleUp />}
      />
      <Card
        label="Total Balance"
        value={String(formatMoney(totalBalance))}
        icon={<FaWallet />}
      />
    </div>
  )
}
