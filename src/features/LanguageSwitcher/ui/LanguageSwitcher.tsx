import styles from './LanguageSwitcher.module.scss'

import { FC, memo, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

import DropdownIcon from 'shared/assets/icons/dropdown.svg'
import { LanguageOption, languageOptions } from '../lib/options'
import { getOption } from '../lib/getOption'
import { LanguageOptionComponent } from './LanguageOptionComponent'
import { useOutsideAlerter } from 'shared/lib/hooks/useOutsideAlerter'

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

    const container = useRef(null)
    useOutsideAlerter({ ref: container, callback: () => setOptionsOpened(false) })

    const toggleDropdown = () => {
      setOptionsOpened(prev => !prev)
    }

    useEffect(() => {
      i18n.changeLanguage(selectedLanguage.locale)
      setOptionsOpened(false)
    }, [selectedLanguage.locale, i18n])

    useEffect(() => {
      setSelectedLanguage(getOption(languageOptions, i18n.language))
    }, [i18n.language])

    return (
      <div
        className={classNames(styles.LanguageSwitcher, {}, [className])}
        ref={container}>
        <div
          className={classNames(styles.selectedOption, {}, [
            optionsOpened && styles.selectedOptionActive
          ])}
          onClick={toggleDropdown}
        >
          <img src={selectedLanguage.icon} width={24} height={24} />
          {selectedLanguage.label}
          <DropdownIcon className={classNames(styles.dropdownIcon, {}, [])} />
        </div>

        {optionsOpened && (
          <div
            className={classNames(styles.languageOptions, {}, [mobile ? styles.mobile : undefined])}
          >
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
