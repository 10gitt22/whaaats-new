import { profileReducer, profileActions } from './profileSlice'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { ProfileSchema } from '../types/profile'

const profileData = {
  id: '1',
  firstName: 'Yevhen',
  lastName: 'Gitt',
  age: 21,
  country: 'Ukraine',
  username: 'gitt22',
  avatar: 'https://avatars.githubusercontent.com/u/46067435?s=400&u=7320d508b61430bed0ef63868ed28578b208c292&v=4',
  backgroundPhoto: 'https://wallpaper.dog/large/20501895.jpg'
}

describe('profile slice', () => {
  describe('reducers', () => {
    test('should set readonly flag', () => {
      const initialState: DeepPartial<ProfileSchema> = { readonly: true }
      const action = profileActions.setReadonly(false)
      const state = profileReducer(initialState as ProfileSchema, action)
      expect(state.readonly).toBe(false)
    })

    test('should set profile data', () => {
      const initialState: DeepPartial<ProfileSchema> = { data: undefined }
      const action = profileActions.setData(profileData)
      const state = profileReducer(initialState as ProfileSchema, action)
      expect(state.data).toBe(profileData)
    })
  })

  describe('extra reducers', () => {
    test('should set isLoading flag to true on fetchProfileData.pending', () => {
      const initialState: DeepPartial<ProfileSchema> = { isLoading: false }
      const action = { type: fetchProfileData.pending.type }
      const state = profileReducer(initialState as ProfileSchema, action)
      expect(state.isLoading).toBe(true)
    })

    test('should set isLoading flag to false and set profile data on fetchProfileData.fulfilled', () => {
      const initialState: DeepPartial<ProfileSchema> = { isLoading: true, data: undefined }
      const action = { type: fetchProfileData.fulfilled.type, payload: profileData }
      const state = profileReducer(initialState as ProfileSchema, action)
      expect(state.isLoading).toBe(false)
      expect(state.data).toBe(profileData)
    })

    test('should set isLoading flag to false and set error message on fetchProfileData.rejected', () => {
      const initialState: DeepPartial<ProfileSchema> = { isLoading: true, error: undefined }
      const errorMessage = 'Failed to fetch profile data'
      const action = { type: fetchProfileData.rejected.type, payload: errorMessage }
      const state = profileReducer(initialState as ProfileSchema, action)
      expect(state.isLoading).toBe(false)
      expect(state.error).toBe(errorMessage)
    })
  })
})
