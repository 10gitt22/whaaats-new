import { ProfileUpdateData } from '../model/types/profileForm'
import { $api } from 'shared/api/api'
import { Profile } from 'entities/Profile'

export const updateProfileData = async (data: ProfileUpdateData) => {
  const response = await $api.patch<Profile>('/profile', data)
  return response.data
}
