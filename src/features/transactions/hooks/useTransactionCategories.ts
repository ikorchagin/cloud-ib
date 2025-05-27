import { useGetTransactionsQuery } from '.'

export function useTransactionCategories() {
  const { data, isLoading } = useGetTransactionsQuery(undefined, {})

  const categories = data?.reduce<Set<string>>((set, transaction) => {
    set.add(transaction.category)
    return set
  }, new Set())

  return {
    categories: Array.from(categories?.values() || []),
    isLoading,
  }
}
