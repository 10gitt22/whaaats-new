import styles from './LanguageSwitcher.module.scss'

import { FC, memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import DropdownIcon from 'shared/assets/icons/dropdown.svg'
import { LanguageOption, languageOptions } from '../lib/options'
import { getOption } from '../lib/getOption'
import { LanguageOptionComponent } from './LanguageOptionComponent'

type LanguageSwitcherProps = {
  mobile?: boolean
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
  ({ className, mobile }) => {
    const { i18n } = useTranslation()
    const [optionsOpened, setOptionsOpened] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(
      getOption(languageOptions, i18n.language)
    )

    const openSelect = useCallback((isOpen: boolean) => {
      setOptionsOpened(!isOpen)
    }, [])

    useEffect(() => {
      i18n.changeLanguage(selectedLanguage.locale)
      setOptionsOpened(false)
    }, [selectedLanguage])

    return (
      <div className={classNames(styles.LanguageSwitcher, {}, [className])}>
        <div
          className={classNames(styles.selectedOption, {}, [
            optionsOpened && styles.selectedOptionActive
          ])}
          onClick={() => openSelect(optionsOpened)}
        >
          <img src={selectedLanguage.icon} width={24} height={24} />
          {selectedLanguage.label}
          <DropdownIcon className={classNames(styles.dropdownIcon, {}, [])} />
        </div>

        {optionsOpened && (
          <div className={classNames(styles.languageOptions, {}, [mobile ? styles.mobile : undefined])}>
            {languageOptions.map((option) => {
              return (
                <LanguageOptionComponent
                  key={option.locale}
                  label={option.label}
                  locale={option.locale}
                  icon={option.icon}
                  setSelectedLanguage={setSelectedLanguage}
                />
              )
            })}
          </div>
        )}
      </div>
    )
  }
)
