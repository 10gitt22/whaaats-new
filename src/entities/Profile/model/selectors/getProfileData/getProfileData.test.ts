import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  test('should return user data', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(profileData)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
