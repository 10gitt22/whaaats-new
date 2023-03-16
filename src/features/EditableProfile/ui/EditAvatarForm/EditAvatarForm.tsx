import { FC, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { AxiosError } from 'axios'
import { useToast } from 'app/providers/ToastProvider'

import { classNames } from 'shared/lib/classNames/classNames'
import Error from 'shared/assets/icons/error.svg'
import { Input } from 'shared/ui/Input/Input'
import { Button, ButtonVariants } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { profileActions } from 'entities/Profile'

import { updateProfileAvatar } from '../../api/updateProfileAvatar/updateProfileAvatar'
import styles from '../FormStyles.module.scss'

export type EditAvatarFormProps = {
  className?: string
  avatar: string | null
  close: () => void
}

const EditAvatarForm: FC<EditAvatarFormProps> = memo(({ className, avatar, close }) => {
  const { t } = useTranslation('forms')
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const { success } = useToast()

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: { avatar: avatar || '' },
    onSubmit: async (data) => {
      setLoading(true)
      try {
        const avatar = data.avatar === '' ? null : data.avatar
        const response = await updateProfileAvatar({ avatar })
        dispatch(profileActions.setData(response))
        success(t('profileAvatarUpdated', { ns: 'profile' }))
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

  const backgroundImage = useMemo(() => {
    return { backgroundImage: values.avatar ? `url(${values.avatar})` : 'none' }
  }, [values.avatar])

  return (
    <form className={classNames(styles.EditAvatarForm, {}, [className])} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>{t('editBackgroundPhoto', { ns: 'profile' })}</h3>
      <div className={styles.avatarPreview} style={backgroundImage}>
      </div>
      {error && (
        <div className={styles.error}>
          <Error className={styles.errorIcon}/>
          <div className={styles.errorMessage}>{error}</div>
        </div>
      )}
      <Input
        className={styles.inputField}
        label={t('photoUrl')}
        id={'avatar'}
        name={'avatar'}
        value={values.avatar}
        onChangeFormik={handleChange}
      />
      <div className={styles.buttonBlock}>
        <Button className={styles.button} type='button' variant={ButtonVariants.OUTLINED} onClick={handleReset}>{t('reset')}</Button>
        <Button className={styles.button} type='submit' disabled={loading} variant={ButtonVariants.PRIMARY}>{t('save')}</Button>
      </div>
    </form>
  )
})

export default EditAvatarForm
