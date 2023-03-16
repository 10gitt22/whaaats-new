import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

jest.mock('axios')

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

describe('fetchProfileData', () => {
  test('success fetching', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({
      data: profileData
    }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
