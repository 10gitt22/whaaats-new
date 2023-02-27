import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import useWindowDimensions from 'shared/lib/hooks/useWindowDimentions'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Logo } from 'shared/ui/Logo/Logo'
import { LogoSmall } from 'shared/ui/Logo/LogoSmall'
import Error from 'shared/assets/icons/error.svg'

import { loginActions, loginReducer } from '../../model/slices/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import styles from './LoginForm.module.scss'

export type LoginFormProps = {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation('forms')
  const { width } = useWindowDimensions()

  const dispatch = useAppDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback((e) => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <form className={classNames(styles.LoginForm, {}, [className])} onSubmit={handleSubmit}>
        <div className={styles.formTitle}>
          <h3>{t('logIn', { ns: 'translation' })}</h3>
          {
            width > 768 ? <Logo className={styles.formLogo}/> : <LogoSmall className={styles.formLogo}/>
          }
        </div>

        {error && (
          <div className={styles.error}>
            <Error className={styles.errorIcon}/>
            <div className={styles.errorMessage}>{error}</div>
          </div>
        )}
        <div>
          <Input
            className={styles.inputField}
            label={t('username')}
            id={'username'}
            value={username}
            onChange={onChangeUsername}
          />
          <Input
            className={styles.inputField}
            type='password'
            label={t('password')}
            id={'password'}
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <Button
          disabled={isLoading}
          onClick={onLoginClick}
        >
          {t('signIn', { ns: 'translation' })}
        </Button>
      </form>
    </DynamicModuleLoader>
  )
})

export default LoginForm
