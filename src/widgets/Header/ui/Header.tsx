import styles from './Header.module.scss'

import { FC, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import useWindowDimensions from 'shared/hooks/useWindowDimentions'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'
import { Logo } from 'shared/ui/Logo/Logo'
import { LogoSmall } from 'shared/ui/Logo/LogoSmall'
import { Modal } from 'shared/ui/Modal/Modal'

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
  const { width } = useWindowDimensions()
  const [openAuthModal, setOpenAuthModal] = useState(false)

  const toggleAuthModal = useCallback(() => {
    setOpenAuthModal(prev => !prev)
  }, [])

  return (
    <header className={classNames(styles.header, {}, [className])}>
      {
        width > 768
          ? (
            <>
              <Logo />
              <DesktopMenu isAuth={false} openAuthModal={toggleAuthModal}/>
            </>
          )
          : (
            <>
              <LogoSmall />
              <MobileMenu isAuth={false} openAuthModal={toggleAuthModal}/>
            </>
          )
      }
      <Modal isOpen={openAuthModal} onClose={toggleAuthModal} />
    </header>
  )
}
