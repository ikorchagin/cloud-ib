import { useTable } from '@/ui/table/hooks/useTable.ts'

export function TableHeader<T>() {
  const {
    table: { columns, rowActions },
  } = useTable<T>()

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key}>{column.title}</th>
        ))}
        {rowActions ? <th /> : null}
      </tr>
    </thead>
  )
}
