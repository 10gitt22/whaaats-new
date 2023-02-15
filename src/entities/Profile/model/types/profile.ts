import { Currency } from 'shared/const/common'

export interface Profile {
  id: string
  firstName: string
  lastName: string
  age: number
  currency: Currency
  country: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
