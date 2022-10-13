import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { CircleLoader } from 'shared/ui/CircleLoader/CircleLoader'
import styles from './PageLoader.module.scss'

type PageLoaderProps = {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.PageLoader, {}, [className, 'page'])}>
      <CircleLoader />
    </div>
  )
}
