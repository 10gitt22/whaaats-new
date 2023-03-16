import { FC, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { AxiosError } from 'axios'
import * as Yup from 'yup'
import { useToast } from 'app/providers/ToastProvider'

import { classNames } from 'shared/lib/classNames/classNames'
import Error from 'shared/assets/icons/error.svg'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { profileActions } from 'entities/Profile'

import { updateProfileData } from '../../api/updateProfileData/updateProfileData'
import { ProfileUpdateData } from '../../model/types/profileForm'
import styles from '../FormStyles.module.scss'

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

  const { values, touched, errors, handleChange, handleSubmit, resetForm } = useFormik({
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
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(t('required'))
      // eslint-disable-next-line no-useless-escape
        .matches(/^[a-zA-Za-яА-Я\-]+$/, t('onlyLetters')),
      lastName: Yup.string().required(t('required'))
      // eslint-disable-next-line no-useless-escape
        .matches(/^[a-zA-Za-яА-Я\-]+$/, t('onlyLetters')),
      username: Yup.string().required(t('required'))
        .matches(/^[a-zA-Z0-9]+$/, t('onlyLatin'))
        .min(4, t('minLength4')),
      age: Yup.number().required(t('required')).min(0, t('enterCorrectAge')).max(120, t('enterCorrectAge')),
      country: Yup.string()
        .required(t('required'))
        .matches(/^[a-zA-Z]+$/, t('onlyLatin'))
    }),
    enableReinitialize: true
  })

  const handleReset = useCallback(() => {
    resetForm()
  }, [])

  useEffect(() => {
    console.log(errors)
  }, [errors.firstName])

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
          error={touched.firstName && errors.firstName ? errors.firstName : undefined}
          value={values.firstName}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          label={t('lastName')}
          id={'lastName'}
          name={'lastName'}
          error={touched.lastName && errors.lastName ? errors.lastName : undefined}
          value={values.lastName}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          label={t('username')}
          id={'username'}
          name={'username'}
          value={values.username}
          error={touched.username && errors.username ? errors.username : undefined}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          type='number'
          label={t('age')}
          id={'age'}
          name={'age'}
          value={values.age}
          error={touched.age && errors.age ? errors.age : undefined}
          onChangeFormik={handleChange}
        />
        <Input
          className={styles.inputField}
          label={t('country')}
          id={'country'}
          name={'country'}
          value={values.country}
          error={touched.country && errors.country ? errors.country : undefined}
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
