import styles from './Header.module.scss'

import { FC, memo, useCallback, useEffect, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import useWindowDimensions from 'shared/lib/hooks/useWindowDimentions'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'
import { Logo } from 'shared/ui/Logo/Logo'
import { LogoSmall } from 'shared/ui/Logo/LogoSmall'
import { LoginModal } from 'features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = memo(({ className }) => {
  const { width } = useWindowDimensions()
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onOpenModal = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setOpenAuthModal(false)
  }, [])

  useEffect(() => {
    if (authData) onCloseModal()
  }, [authData, onCloseModal])

  return (
    <header className={classNames(styles.header, {}, [className])}>
      {
        width > 768
          ? (
            <>
              <Logo />
              <DesktopMenu authData={authData} openAuthModal={onOpenModal}/>
            </>
          )
          : (
            <>
              <LogoSmall />
              <MobileMenu authData={authData} openAuthModal={onOpenModal}/>
            </>
          )
      }
      {!authData && <LoginModal isOpen={openAuthModal} onClose={onCloseModal} /> }
    </header>
  )
})
