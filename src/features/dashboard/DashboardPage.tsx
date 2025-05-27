import { Paper } from '@/ui/components/Paper'
import { useTransactionCategories } from '@/features/transactions/hooks/useTransactionCategories.ts'

export function DashboardPage() {
  const { categories, isLoading } = useTransactionCategories()

  console.log(categories)

  return (
    <div>
      <Paper></Paper>
    </div>
  )
}
