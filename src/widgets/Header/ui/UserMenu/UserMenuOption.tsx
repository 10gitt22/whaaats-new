import { FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './UserMenuOption.module.scss'

type UserMenuOptionProps = {
  className?: string
  label: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  onClick?: () => void
}

export const UserMenuOption: FC<UserMenuOptionProps> = memo(({ className, label, icon: Icon, onClick }) => {
  return (
    <div
      className={classNames(styles.UserMenuOption, {}, [className])}
      onClick={onClick}
    >
      <Icon className={styles.optionIcon}/>
      <div className={styles.label}>{label}</div>
    </div>
  )
})
