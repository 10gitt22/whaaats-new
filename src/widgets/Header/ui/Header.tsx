import styles from './Header.module.scss';

import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavLink } from 'shared/ui/NavLink/NavLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(styles.header, {}, [className])}>
      <div className={styles.logo}>
        Whaaat's <span>new</span>
      </div>

      <div className={styles.menu}>
        <div className={styles.nav}>
          <NavLink to={'/'}>{t('main')}</NavLink>
          <NavLink to={'/about'}>{t('about')}</NavLink>
        </div>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};
