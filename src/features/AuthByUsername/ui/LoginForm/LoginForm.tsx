import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useWindowDimensions from 'shared/hooks/useWindowDimentions'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Logo } from 'shared/ui/Logo/Logo'
import { LogoSmall } from 'shared/ui/Logo/LogoSmall'
import styles from './LoginForm.module.scss'

type LoginFormProps = {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const [value, setValue] = useState('')

  const usernameT = t('username')
  const passwordT = t('password')

  const onChangeUsername = (val: string) => {
    setValue(val)
  }

  return (
    <form className={classNames(styles.LoginForm, {}, [className])}>
      <div className={styles.formTitle}>
        <h3>{t('logIn')}</h3>
        {
          width > 768 ? <Logo className={styles.formLogo}/> : <LogoSmall className={styles.formLogo}/>
        }
      </div>
      <div className={styles.inputBlock}>
        <Input
          className={styles.inputField}
          label={usernameT}
          id={usernameT}
          value={value}
          onChange={onChangeUsername}
        />
        <Input className={styles.inputField} type='password' label={passwordT} id={passwordT}/>
      </div>
      <Button>
        {t('signIn')}
      </Button>
    </form>
  )
}
