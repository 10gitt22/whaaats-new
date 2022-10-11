import styles from './LanguageOptionComponent.module.scss';
import { FC, memo, useCallback } from 'react';
import { LanguageOption, languageOptions } from '../lib/options';
import { getOption } from '../lib/getOption';

type LanguageOptionProps = LanguageOption & {
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageOption>>;
};

export const LanguageOptionComponent: FC<LanguageOptionProps> = memo(
  ({ locale, label, icon, setSelectedLanguage }) => {
    const setLanguage = useCallback(() => {
      setSelectedLanguage(getOption(languageOptions, locale));
    }, []);

    return (
      <div className={styles.languageOption} onClick={setLanguage}>
        <img src={icon} width={24} height={24} />
        {label}
      </div>
    );
  }
);
