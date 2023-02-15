import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
  test('success login', async () => {
    const authData = {
      username: 'admin',
      id: '1'
    }

    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: authData
    }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: 'admin', password: '123' })

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(authData))
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(mockedAxios.post).toBeCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(authData)
  })

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({
      username: 'admin',
      password: '123khj'
    })

    expect(mockedAxios.post).toBeCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Error')
  })
})
