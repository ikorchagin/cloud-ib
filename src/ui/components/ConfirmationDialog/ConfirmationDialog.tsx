import { Modal } from '@/ui/modal/components/Modal.tsx'
import { Button } from '@/ui/components/Button'

import type { ConfirmationDialogProps } from './types'

export function ConfirmationDialog(props: ConfirmationDialogProps) {
  return (
    <Modal {...props} size="small">
      <Modal.Title>Confirmation action</Modal.Title>
      <Modal.Content>
        <p>
          Are you sure you want to perform this action? This action
          cannot be undone.
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={props.onConfirm}>Confirm</Button>
      </Modal.Actions>
    </Modal>
  )
}
