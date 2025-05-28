import type { ModalProps } from '@/ui/modal/types.ts'

export interface ConfirmationDialogProps extends ModalProps {
  onConfirm: () => void
}
