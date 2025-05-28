import {
  FaAirbnb,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaWallet,
} from 'react-icons/fa'

import { Card } from '@/ui/components/Card/Card.tsx'

import styles from './DashboardPage.module.css'
import { useTransactionMetrics } from '../transactions/hooks'

export function DashboardPage() {
  const { totalIncome, totalExpense, totalBalance } =
    useTransactionMetrics()

  return (
    <div className={styles.container}>
      <Card
        label="Total Income"
        value={String(totalIncome)}
        icon={<FaArrowCircleDown />}
      />
      <Card
        label="Total Expenses"
        value={String(totalExpense)}
        icon={<FaArrowCircleUp />}
      />
      <Card
        label="Total Balance"
        value={String(totalBalance)}
        icon={<FaWallet />}
      />
      <Card label={'TEst2'} value={'228228'} icon={<FaAirbnb />} />
    </div>
  )
}
