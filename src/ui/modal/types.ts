import React from 'react'

export type ModalSize = 'small' | 'medium' | 'large'

export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  size?: ModalSize
  fullHeight?: boolean
}

export type ModalTitleProps = React.PropsWithChildren
export type ModalContentProps = React.PropsWithChildren
