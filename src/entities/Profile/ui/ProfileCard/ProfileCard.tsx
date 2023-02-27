import { FC, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import LocationIcon from 'shared/assets/icons/location.svg'
import EditIcon from 'shared/assets/icons/edit.svg'

import { EditProfileModal, EditAvatarModal } from 'features/EditableProfile'
import { ProfileUpdateData } from 'features/EditableProfile/model/types/profileForm'

import { Profile } from '../../model/types/profile'
import styles from './ProfileCard.module.scss'

type ProfileCardProps = {
  className?: string
  profileData: Profile
}

export const ProfileCard: FC<ProfileCardProps> = memo(({ className, profileData }) => {
  const { t } = useTranslation('profile')
  const [openEditProfileDataModal, setOpenEditProfileDataModal] = useState(false)
  const [openEditAvatarModal, setOpenEditAvatarModal] = useState(false)

  const backgroundImage = useMemo(() => {
    return { backgroundImage: profileData.avatar ? `url(${profileData.avatar})` : 'none' }
  }, [profileData.avatar])

  const profileUpdateData = useMemo<ProfileUpdateData>(() => {
    const { id, backgroundPhoto, avatar, ...restData } = profileData
    return restData
  }, [profileData])

  const handleOpenEditProfileModal = useCallback(() => {
    setOpenEditProfileDataModal(true)
  }, [])

  const handleCloseEditProfileModal = useCallback(() => {
    setOpenEditProfileDataModal(false)
  }, [])

  const handleOpenEditAvatarModal = useCallback(() => {
    setOpenEditAvatarModal(true)
  }, [])

  const handleCloseEditAvatarModal = useCallback(() => {
    setOpenEditAvatarModal(false)
  }, [])

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.avatar}>
        <div className={styles.photo} style={backgroundImage}>
          { !profileData.avatar && 'No Photo'}
        </div>
        <Button
          className={styles.changeAvatar}
          variant={ButtonVariants.FILLED}
          onClick={handleOpenEditAvatarModal}
        >
          <EditIcon />
        </Button>
      </div>
      <div className={styles.name}>
        <div className={classNames(styles.displayName, {}, [styles.field])}>{profileData.firstName} {profileData.lastName}</div>
        <div className={classNames(styles.username, {}, [styles.field])}>@{profileData.username}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.fieldWithIcon}>
          <LocationIcon /> {profileData.country}
        </div>
        <div>
          {t('age')}: {profileData.age}
        </div>
      </div>
      <Button
        className={styles.editButtonDesktop}
        variant={ButtonVariants.OUTLINED}
        onClick={handleOpenEditProfileModal}
      >
        <EditIcon /> {t('toEditProfile')}
      </Button>
      <EditAvatarModal isOpen={openEditAvatarModal} avatar={profileData.avatar} onClose={handleCloseEditAvatarModal}/>
      <EditProfileModal isOpen={openEditProfileDataModal} profileData={profileUpdateData} onClose={handleCloseEditProfileModal}/>
    </div>
  )
})
