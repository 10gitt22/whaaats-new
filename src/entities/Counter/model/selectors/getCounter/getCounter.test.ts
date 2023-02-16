import { getCounter } from './getCounter'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getCounter', () => {
  test('should return counter state with value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
