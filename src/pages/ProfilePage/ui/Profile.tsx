import { profileReducer } from 'entities/Profile'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: ReducersList = {
  profile: profileReducer
}

const Profile = memo(() => {
  const { t } = useTranslation()
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="page">{t('profile')}</div>
    </DynamicModuleLoader>
  )
})

export default Profile
