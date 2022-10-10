import { FC } from 'react';
import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NavLink.module.scss';

type NavLinkProps = LinkProps & {
  className?: string;
};

export const NavLink: FC<NavLinkProps> = ({ to, className, children }) => {
  return (
    <Link to={to} className={classNames(styles.navLink, {}, [className])}>
      {children}
    </Link>
  );
};
