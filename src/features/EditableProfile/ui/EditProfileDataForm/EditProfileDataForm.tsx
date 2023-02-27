import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { AxiosError } from 'axios'

import { classNames } from 'shared/lib/classNames/classNames'
import Error from 'shared/assets/icons/error.svg'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { profileActions } from 'entities/Profile'

import { updateProfileData } from '../../api/updateProfileData'
import { ProfileUpdateData } from '../../model/types/profileForm'
import styles from '../FormStyles.module.scss'
import { useToast } from 'app/providers/ToastProvider'

export type EditProfileDataFormProps = {
  profileData: ProfileUpdateData
  className?: string
  close: () => void
}

const EditProfileDataForm: FC<EditProfileDataFormProps> = ({ className, profileData, close }) => {
  const { t } = useTranslation('forms')
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const { success } = useToast()

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: profileData,
    onSubmit: async (data) => {
      setLoading(true)
      try {
        const response = await updateProfileData(data)
        dispatch(profileActions.setData(response))
        success(t('profileDataUpdated', { ns: 'profile' }))
        close()
      } catch (error) {
        const err = error as AxiosError
        setError(err.message)
      }
      setLoading(false)
    },
    enableReinitialize: true
  })

  const handleReset = useCallback(() => {
    resetForm()
  }, [])

  return (
    <div className={classNames(styles.EditProfileDataForm, {}, [className])}>
      <h3 className={styles.formTitle}>{t('editProfile', { ns: 'profile' })}</h3>
      {error && (
        <div className={styles.error}>
          <Error className={styles.errorIcon}/>
          <div className={styles.errorMessage}>{error}</div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          className={styles.inputField}
          label={t('firstName')}
          id={'firstName'}
          name={'firstName'}
          value={values.firstName}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          label={t('lastName')}
          id={'lastName'}
          name={'lastName'}
          value={values.lastName}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          label={t('username')}
          id={'username'}
          name={'username'}
          value={values.username}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          type='number'
          label={t('age')}
          id={'age'}
          name={'age'}
          value={values.age}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          label={t('country')}
          id={'country'}
          name={'country'}
          value={values.country}
          onChangeFormik={handleChange}
        />
        <div className={styles.buttonBlock}>
          <Button className={styles.button} type='button' variant={ButtonVariants.OUTLINED} onClick={handleReset}>{t('reset')}</Button>
          <Button className={styles.button} type='submit' disabled={loading} variant={ButtonVariants.PRIMARY}>{t('save')}</Button>
        </div>
      </form>
    </div>
  )
}

export default EditProfileDataForm