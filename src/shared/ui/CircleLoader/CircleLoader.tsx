import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './CircleLoader.module.scss'

type CircleLoaderProps = {
  className?: string
}

export const CircleLoader: FC<CircleLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.CircleLoader, {}, [className])}>
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle className={styles.path} cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
      </svg>
    </div>
  )
}
