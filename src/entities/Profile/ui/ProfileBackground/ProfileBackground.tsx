import { FC, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import EditIcon from 'shared/assets/icons/edit.svg'
import useWindowDimensions from 'shared/lib/hooks/useWindowDimentions'

import styles from './ProfileBackground.module.scss'
import { EditBackgroundPhotoModal } from 'features/EditableProfile'

type ProfileBackgroundProps = {
  className?: string
  backgroundPhoto: string | null
}

export const ProfileBackground: FC<ProfileBackgroundProps> = memo(({ className, backgroundPhoto }) => {
  const { t } = useTranslation('profile')
  const { width } = useWindowDimensions()
  const [openEditModal, setOpenEditModal] = useState(false)

  const backgroundImage = useMemo(() => {
    return { backgroundImage: backgroundPhoto ? `url(${backgroundPhoto})` : 'none' }
  }, [backgroundPhoto])

  const handleOpenModal = useCallback(() => {
    setOpenEditModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setOpenEditModal(false)
  }, [])

  return (
    <div className={classNames(styles.ProfileBackground, {}, [className])}>
      <div className={styles.image} style={backgroundImage}>
      </div>
      <Button className={styles.editBackgroundButton} variant={ButtonVariants.FILLED} onClick={handleOpenModal}>
        <EditIcon />
        {width > 768 && t('toEditBackground')}
      </Button>
      <EditBackgroundPhotoModal isOpen={openEditModal} onClose={handleCloseModal} backgroundPhoto={backgroundPhoto} />
    </div>
  )
})
