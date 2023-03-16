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

import { updateProfileBackground } from 'features/EditableProfile/api/updateProfileBackground/updateProfileBackground'
import { profileActions } from 'entities/Profile'

import styles from '../FormStyles.module.scss'

export type EditBackgroundPhotoFormProps = {
  className?: string
  backgroundPhoto: string | null
  close: () => void
}

const EditBackgroundPhotoForm: FC<EditBackgroundPhotoFormProps> = memo(({ className, backgroundPhoto, close }) => {
  const { t } = useTranslation('forms')
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const { success } = useToast()

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: { backgroundPhoto: backgroundPhoto || '' },
    onSubmit: async (data) => {
      setLoading(true)
      try {
        const backgroundPhoto = data.backgroundPhoto === '' ? null : data.backgroundPhoto
        const response = await updateProfileBackground({ backgroundPhoto })
        dispatch(profileActions.setData(response))
        success(t('profileBackgroundUpdated', { ns: 'profile' }))
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
    return { backgroundImage: values.backgroundPhoto ? `url(${values.backgroundPhoto})` : 'none' }
  }, [values.backgroundPhoto])

  return (
    <form className={classNames(styles.EditBackgroundPhotoForm, {}, [className])} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>{t('editBackgroundPhoto', { ns: 'profile' })}</h3>
      <div className={styles.backgroundPreview} style={backgroundImage}>
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
        id={'backgroundPhoto'}
        name={'backgroundPhoto'}
        value={values.backgroundPhoto}
        onChangeFormik={handleChange}
      />
      <div className={styles.buttonBlock}>
        <Button className={styles.button} type='button' variant={ButtonVariants.OUTLINED} onClick={handleReset}>{t('reset')}</Button>
        <Button className={styles.button} type='submit' disabled={loading} variant={ButtonVariants.PRIMARY}>{t('save')}</Button>
      </div>
    </form>
  )
})

export default EditBackgroundPhotoForm
