import type { ModalProps } from '@/ui/components/Modal/types.ts'

export interface ConfirmationDialogProps extends ModalProps {
  onConfirm: () => void
}
