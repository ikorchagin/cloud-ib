import { useParams } from 'react-router'

import { useGetTransactionByIdQuery } from '.'

export function useCurrentTransaction() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetTransactionByIdQuery(id || '')

  return {
    transaction: data,
    isLoading,
  }
}
