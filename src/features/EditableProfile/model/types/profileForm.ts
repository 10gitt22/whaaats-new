import { Profile } from 'entities/Profile'

export type ProfileUpdateData = Omit<Profile, 'id' | 'backgroundPhoto' | 'avatar'>
export type ProfileUpdateAvatar = Pick<Profile, 'avatar'>
export type ProfileUpdateBackgroundPhoto = Pick<Profile, 'backgroundPhoto'>
