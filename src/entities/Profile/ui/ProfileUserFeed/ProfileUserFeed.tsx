import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ProfileUserFeed.module.scss'

type ProfileUserFeedProps = {
  className?: string
}

export const ProfileUserFeed: FC<ProfileUserFeedProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  return (
    <div className={classNames(styles.ProfileUserFeed, {}, [className])}>
      <div className={styles.emptyBlock}>
        {t('emptyFeed')}
      </div>
    </div>
  )
}
