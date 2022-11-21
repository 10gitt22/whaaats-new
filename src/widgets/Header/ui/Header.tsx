import styles from './Header.module.scss'

import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import useWindowDimensions from 'shared/hooks/useWindowDimentions'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { width } = useWindowDimensions()

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div className={styles.logo}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <>Whaaat&apos;s <span>new</span></>
      </div>

      {
        width > 768
          ? <DesktopMenu />
          : <MobileMenu />
      }

    </header>
  )
}
