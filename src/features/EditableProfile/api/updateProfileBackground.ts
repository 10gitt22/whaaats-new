import { Profile } from 'entities/Profile'
import { $api } from 'shared/api/api'
import { ProfileUpdateBackgroundPhoto } from '../model/types/profileForm'

export const updateProfileBackground = async (photo: ProfileUpdateBackgroundPhoto) => {
  const response = await $api.patch<Profile>('/profile', photo)
  return response.data
}
