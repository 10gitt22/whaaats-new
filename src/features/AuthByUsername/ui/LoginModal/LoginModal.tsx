import { FC, Suspense } from 'react'
import { CircleLoader } from 'shared/ui/CircleLoader/CircleLoader'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

type LoginModalProps = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<CircleLoader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
