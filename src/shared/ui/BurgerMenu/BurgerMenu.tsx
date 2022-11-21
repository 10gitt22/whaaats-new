import { Dispatch, FC, SetStateAction } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './BurgerMenu.module.scss'

type BurgerMenuProps = {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  className?: string
}

export const BurgerMenu: FC<BurgerMenuProps> = ({
  opened,
  setOpened,
  className
}) => {
  const handleClick = () => {
    setOpened(!opened)
  }

  return (
    <div
      className={classNames(styles.BurgerMenu, {}, [
        className,
        opened ? styles.opened : undefined
      ])}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
