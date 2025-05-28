import { createBrowserRouter } from 'react-router'

import { DashboardPage } from '@/features/dashboard'
import { TransactionsPage } from '@/features/transactions/pages/TransactionsPage'
import { TransactionDetailsPage } from '@/features/transactions/pages/TransactionDetailsPage'

import { AppLayout } from './AppLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        index: true,
        path: '/',
        Component: DashboardPage,
      },
      {
        path: '/transactions',
        Component: TransactionsPage,
      },
      {
        path: '/transactions/:id',
        Component: TransactionDetailsPage,
      },
    ],
  },
])
