import React from 'react'
import { Outlet } from 'react-router'
import { Provider } from 'react-redux'

import { ThemeSwitcher } from '@/ui/theme'
import { NavSwitch } from '@/ui/components/NavSwitch'

import styles from './AppLayout.module.css'
import { store } from '../store'

export const AppLayout: React.FC = () => {
  return (
    <Provider store={store}>
      <header className={styles.headerContainer}>
        <div className={`${styles.headerContent}`}>
          <h3 className={styles.logo}>Cloud IB</h3>
          <NavSwitch
            items={[
              {
                label: 'Dashboard',
                to: '/',
              },
              {
                label: 'Transactions',
                to: '/transactions',
              },
            ]}
          />
          <ThemeSwitcher />
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer></footer>
    </Provider>
  )
}
