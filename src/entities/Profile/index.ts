export { Profile, ProfileSchema } from './model/types/profile'
export { profileReducer, profileActions } from './model/slice/profileSlice'

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'

export { getProfileData } from './model/selectors/getProfileData/getProfileData'
export { getProfileError } from './model/selectors/getProfileError/getProfileError'
export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading'

export { ProfileCard } from './ui/ProfileCard/ProfileCard'
export { ProfileUserFeed } from './ui/ProfileUserFeed/ProfileUserFeed'
export { ProfileBackground } from './ui/ProfileBackground/ProfileBackground'
