import { Profile } from 'entities/Profile'
import { $api } from 'shared/api/api'
import { ProfileUpdateAvatar } from '../model/types/profileForm'

export const updateProfileAvatar = async (photo: ProfileUpdateAvatar) => {
  const response = await $api.patch<Profile>('/profile', photo)
  return response.data
}
