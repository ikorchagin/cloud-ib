import React from 'react'

import styles from './Select.module.css'
import type { SelectProps } from './types'

export function Select(props: SelectProps) {
  const { label, children, ...restProps } = props

  return (
    <label className={styles.label}>
      {label}
      <select className={styles.select} {...restProps}>
        {children}
      </select>
    </label>
  )
}

Select.Option = function SelectOption(
  props: React.PropsWithChildren &
    React.OptionHTMLAttributes<HTMLOptionElement>,
) {
  const { children, ...restProps } = props

  return <option {...restProps}>{children}</option>
}
