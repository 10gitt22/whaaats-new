import styles from './Header.module.scss';

import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div className={styles.logo}>
        Whaaat's <span>new</span>
      </div>

      <div className={styles.menu}>
        <div className={styles.nav}>
          <NavLink to={'/'}>Main</NavLink>
          <NavLink to={'/about'}>About</NavLink>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
