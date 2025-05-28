import React from 'react'
import { Link, matchPath, useLocation } from 'react-router'

import styles from './NavSwitch.module.css'
import type { NavSwitchProps } from './types.ts'

export function NavSwitch(props: NavSwitchProps) {
  const { items } = props

  const { pathname } = useLocation()

  const renderItems = React.useCallback(
    () =>
      items.map(({ to, label }) => {
        const isSelected = matchPath(pathname, to)

        return (
          <Link
            key={to}
            className={`${styles.link} ${isSelected ? styles.selected : ''}`}
            to={to}
          >
            {label}
          </Link>
        )
      }),
    [items, pathname],
  )

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navContent}>{renderItems()}</nav>
    </div>
  )
}
