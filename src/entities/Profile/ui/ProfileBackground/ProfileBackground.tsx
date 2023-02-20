import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import EditIcon from 'shared/assets/icons/edit.svg'
import useWindowDimensions from 'shared/lib/hooks/useWindowDimentions'

import styles from './ProfileBackground.module.scss'

type ProfileBackgroundProps = {
  className?: string
  backgroundPhoto: string | null
}

export const ProfileBackground: FC<ProfileBackgroundProps> = ({ className, backgroundPhoto }) => {
  const { t } = useTranslation('profile')
  const { width } = useWindowDimensions()

  const backgroundImage = useMemo(() => {
    return { backgroundImage: backgroundPhoto ? `url(${backgroundPhoto})` : 'none' }
  }, [backgroundPhoto])

  return (
    <div className={classNames(styles.ProfileBackground, {}, [className])}>
      <div className={styles.image} style={backgroundImage}>
      </div>
      <Button className={styles.editBackgroundButton} variant={ButtonVariants.FILLED}>
        {width > 768 && t('editBackground')}
        <EditIcon />
      </Button>
    </div>
  )
}
