import { fetchProfileData, profileReducer } from 'entities/Profile'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

const Profile = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="page">{t('profile')}</div>
    </DynamicModuleLoader>
  )
})

export default Profile
