import { createBrowserRouter } from 'react-router'

import { AppLayout } from '@/app/AppLayout'
import { DashboardPage } from '@/features/dashboard'
import { TransactionsPage } from '@/features/transactions'

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
    ],
  },
])
