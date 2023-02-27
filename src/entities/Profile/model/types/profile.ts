export interface Profile {
  id: string
  firstName: string
  lastName: string
  age: number
  country: string
  username: string
  avatar: string | null
  backgroundPhoto: string | null
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
