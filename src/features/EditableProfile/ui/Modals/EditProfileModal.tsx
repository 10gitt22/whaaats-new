
import { ProfileUpdateData } from 'features/EditableProfile/model/types/profileForm'
import { FC, Suspense } from 'react'
import { CircleLoader } from 'shared/ui/CircleLoader/CircleLoader'
import { Modal } from 'shared/ui/Modal/Modal'
import { EditProfileDataFormAsync } from '../EditProfileDataForm/EditProfileDataForm.async'

type EditProfileModalProps = {
  className?: string
  isOpen: boolean
  profileData: ProfileUpdateData
  onClose: () => void
}

export const EditProfileModal: FC<EditProfileModalProps> = ({ className, isOpen, profileData, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<CircleLoader />}>
        <EditProfileDataFormAsync profileData={profileData} close={onClose} />
      </Suspense>
    </Modal>
  )
}
