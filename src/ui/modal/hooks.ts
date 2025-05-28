import React from 'react'

export function useModal() {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = React.useCallback(() => setIsOpen(true), [])
  const closeModal = React.useCallback(() => setIsOpen(false), [])

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
