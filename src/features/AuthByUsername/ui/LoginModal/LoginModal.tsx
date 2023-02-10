import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import styles from './LoginModal.module.scss'

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
      className={classNames(styles.LoginModal, {}, [className])}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}
