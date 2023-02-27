import { FC, Suspense } from 'react'
import { CircleLoader } from 'shared/ui/CircleLoader/CircleLoader'
import { Modal } from 'shared/ui/Modal/Modal'
import { EditAvatarFormAsync } from '../EditAvatarForm/EditAvatarForm.async'

type EditAvatarModalProps = {
  className?: string
  isOpen: boolean
  avatar: string | null
  onClose: () => void
}

export const EditAvatarModal: FC<EditAvatarModalProps> = ({ className, isOpen, avatar, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<CircleLoader />}>
        <EditAvatarFormAsync avatar={avatar} close={onClose}/>
      </Suspense>
    </Modal>
  )
}
