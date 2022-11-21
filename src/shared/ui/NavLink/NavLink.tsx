import { FC } from 'react'
import { LinkProps, Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavLink.module.scss'

type NavLinkProps = LinkProps & {
  className?: string
}

export const NavLink: FC<NavLinkProps> = ({ to, className, children, ...props }) => {
  return (
    <Link to={to} {...props} className={classNames(styles.navLink, {}, [className])}>
      {children}
    </Link>
  )
}
