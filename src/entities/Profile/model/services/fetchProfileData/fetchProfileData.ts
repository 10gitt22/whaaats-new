import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI
    try {
      const response = await extra.api.get<Profile>('/profile')
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (err) {
      const error = err as AxiosError
      if (error.response?.status === 401) {
        setTimeout(() => {
          location.href = '/'
        }, 1000)
      }
      return rejectWithValue(error.response?.data.message)
    }
  }
)
