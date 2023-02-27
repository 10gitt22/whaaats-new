import { FC, Suspense } from 'react'
import { CircleLoader } from 'shared/ui/CircleLoader/CircleLoader'
import { Modal } from 'shared/ui/Modal/Modal'
import { EditBackgroundPhotoFormAsync } from '../EditBackgroundPhotoForm/EditBackgroundPhotoForm.async'

type EditBackgroundPhotoModalProps = {
  className?: string
  isOpen: boolean
  backgroundPhoto: string | null
  onClose: () => void
}

export const EditBackgroundPhotoModal: FC<EditBackgroundPhotoModalProps> = ({ className, isOpen, backgroundPhoto, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<CircleLoader />}>
        <EditBackgroundPhotoFormAsync backgroundPhoto={backgroundPhoto} close={onClose}/>
      </Suspense>
    </Modal>
  )
}
