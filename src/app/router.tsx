import { createBrowserRouter } from 'react-router'

import { AppLayout } from '@/app/AppLayout'
import { DashboardPage } from '@/features/dashboard'
import {
  TransactionDetailsPage,
  TransactionsPage,
} from '@/features/transactions/pages'

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
