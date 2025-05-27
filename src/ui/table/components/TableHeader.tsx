import { useTable } from '@/ui/table/hooks/useTable.ts'

export function TableHeader<T>() {
  const {
    table: { columns },
  } = useTable<T>()

  console.log({ columns })

  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key}>{column.title}</th>
        ))}
      </tr>
    </thead>
  )
}
