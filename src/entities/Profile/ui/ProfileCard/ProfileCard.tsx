import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import LocationIcon from 'shared/assets/icons/location.svg'
import EditIcon from 'shared/assets/icons/edit.svg'

import { Profile } from '../../model/types/profile'
import styles from './ProfileCard.module.scss'

type ProfileCardProps = {
  className?: string
  profileData: Profile
}

export const ProfileCard: FC<ProfileCardProps> = ({ className, profileData }) => {
  const { t } = useTranslation('profile')

  const backgroundImage = useMemo(() => {
    return { backgroundImage: profileData.avatar ? `url(${profileData.avatar})` : 'none' }
  }, [profileData.avatar])

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.photo} style={backgroundImage}>
        { !profileData.avatar && 'No Photo'}
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
      <Button className={styles.editButtonDesktop} variant={ButtonVariants.OUTLINED}><EditIcon /> {t('editProfile')}</Button>
    </div>
  )
}
