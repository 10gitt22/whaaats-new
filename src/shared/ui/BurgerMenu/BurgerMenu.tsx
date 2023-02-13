import { Dispatch, FC, memo, SetStateAction } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './BurgerMenu.module.scss'

type BurgerMenuProps = {
  opened: boolean
  setOpened: Dispatch<SetStateAction<boolean>>
  className?: string
}

export const BurgerMenu: FC<BurgerMenuProps> = memo(({
  opened,
  setOpened,
  className
}) => {
  const handleClick = () => {
    setOpened(prev => !prev)
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
})
