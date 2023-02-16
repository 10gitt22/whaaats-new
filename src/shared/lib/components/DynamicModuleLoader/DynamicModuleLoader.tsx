import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [keyName in StateSchemaKey]?: Reducer
}
type DynamicModuleLoaderProps = {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount
}) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()
  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      store.reducerManager.add(keyName as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${keyName} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
          store.reducerManager.remove(keyName as StateSchemaKey)
          dispatch({ type: `@REMOVE ${keyName} reducer` })
        })
      }
    }
  // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}
