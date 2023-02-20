import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

import { fetchProfileData, ProfileBackground, ProfileCard, ProfileUserFeed, profileReducer, getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile'

import styles from './Profile.module.scss'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { Toast } from 'shared/ui/Toast/Toast'
import { useToast } from 'app/providers/ToastProvider'

const reducers: ReducersList = {
  profile: profileReducer
}

const Profile = memo(() => {
  const dispatch = useAppDispatch()
  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const errorMessage = useSelector(getProfileError)

  const { error } = useToast()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  useEffect(() => {
    if (errorMessage) {
      error(errorMessage)
    }
  }, [errorMessage])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.Profile, {}, ['page'])}>
        <Toast />
        {isLoading && <PageLoader />}
        {!isLoading && profileData && (
          <>
            <ProfileBackground className={styles.profileBackgroundSection} backgroundPhoto={profileData.backgroundPhoto}/>
            <div className={styles.pageContentSection}>
              <ProfileCard className={styles.profileCardSection} profileData={profileData}/>
              <ProfileUserFeed className={styles.profileUserFeedSection} />
            </div>
          </>
        )
        }

      </div>
    </DynamicModuleLoader>
  )
})

export default Profile
