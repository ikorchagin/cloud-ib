import { Table } from '@/ui/table'
import React from 'react'
import { Modal } from '@/ui/modal/Modal.tsx'
import { ModalTitle } from '@/ui/modal/ModalTitle.tsx'
import { ModalContent } from '@/ui/modal/ModalContent.tsx'
import { ModalActions } from '@/ui/modal/ModalActions.tsx'
import { Button } from '@/ui/components/Button'
import type { TableColumn } from '@/ui/table/types.ts'
import type { Transaction } from '@/features/transactions/types.ts'
import { useGetTransactionsQuery } from '@/features/transactions/hooks.ts'

export function TransactionsPage() {
  const [isOpen, setIsOpen] = React.useState(false)

  const columns: TableColumn<Transaction>[] = React.useMemo(
    () => [
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

          return (
            <>
              {numberValue < 0
                ? `-$${Math.abs(numberValue)}`
                : `$${numberValue}`}
            </>
          )
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
              style={{ color: value === 'income' ? 'green' : 'red' }}
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
    ],
    [],
  )

  const { data } = useGetTransactionsQuery(undefined, {})

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>modal</button>
      <Table columns={columns} data={data} />
      <Modal
        isOpen={isOpen}
        size="small"
        onClose={() => setIsOpen(false)}
      >
        <ModalTitle>Test Modal</ModalTitle>
        <ModalContent>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
          <p>
            You can add more components or elements here as needed.
          </p>
        </ModalContent>
        <ModalActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
          <Button onClick={() => alert('Action performed!')}>
            Perform Action
          </Button>
        </ModalActions>
      </Modal>
    </div>
  )
}
