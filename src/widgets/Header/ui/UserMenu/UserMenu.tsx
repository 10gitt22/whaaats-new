import { FC, memo, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import DropdownIcon from 'shared/assets/icons/dropdown.svg'
import { classNames } from 'shared/lib/classNames/classNames'

import ProfileIcon from 'shared/assets/icons/profile.svg'
import { useOutsideAlerter } from 'shared/lib/hooks/useOutsideAlerter'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import SignOutIcon from 'shared/assets/icons/logout.svg'

import { UserMenuOption } from './UserMenuOption'
import { userActions } from 'entities/User'
import styles from './UserMenu.module.scss'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'app/providers/router/config'

type UserMenuProps = {
  className?: string
  isMobile: boolean
  userName: string
}

export const UserMenu: FC<UserMenuProps> = memo(({ className, userName, isMobile }) => {
  const { t } = useTranslation()
  const [userMenuDropdown, setUserMenuDropdown] = useState(false)
  const navigate = useNavigate()

  const container = useRef(null)
  useOutsideAlerter({ ref: container, callback: () => setUserMenuDropdown(false) })

  const dispatch = useAppDispatch()

  const myProfile = t('myProfile')
  const signOut = t('signOut')

  const toggleDropdown = () => {
    setUserMenuDropdown(prev => !prev)
  }

  const toProfilePage = useCallback(() => {
    navigate(RoutePath.profile)
  }, [navigate])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  return (
    <div
      className={classNames(styles.UserMenu, {}, [className])}
      onClick={toggleDropdown}
      ref={container}
    >
      <div
        className={classNames(styles.userInfoBlock, {}, [
          userMenuDropdown ? styles.optionsOpened : undefined
        ])}
      >
        <div className={styles.photo}>{userName[0]}</div>
        {!isMobile && (
          <>
            <span>{userName}</span>
            <DropdownIcon className={styles.dropdownIcon}/>
          </>
        )}
      </div>
      {userMenuDropdown && (
        <div
          className={classNames(styles.userMenuOptions, {}, [isMobile ? styles.mobile : undefined])}
        >
          <UserMenuOption
            key={myProfile}
            label={myProfile}
            icon={ProfileIcon}
            onClick={toProfilePage}
          />
          <UserMenuOption
            key={signOut}
            label={signOut}
            icon={SignOutIcon}
            onClick={onLogout}
          />
        </div>
      )}
    </div>
  )
})
