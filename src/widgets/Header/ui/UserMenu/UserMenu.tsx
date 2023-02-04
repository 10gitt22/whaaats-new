import { FC } from 'react'
import DropdownIcon from 'shared/assets/icons/dropdown.svg'
import styles from './UserMenu.module.scss'

type UserMenuProps = {
  className?: string
  isMobile: boolean
  userName: string
}

export const UserMenu: FC<UserMenuProps> = ({ className, userName, isMobile }) => {
  return (
    <div className={styles.UserMenu}>
      <div className={styles.photo}>{userName[0]}</div>
      {!isMobile && (
        <>
          <span>{userName}</span>
          <DropdownIcon className={styles.dropdownIcon}/>
        </>
      )}
    </div>
  )
}
