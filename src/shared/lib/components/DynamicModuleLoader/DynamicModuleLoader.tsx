import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider'
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [keyName in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

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
    Object.entries(reducers).forEach(([keyName, reducer]: ReducersListEntry) => {
      store.reducerManager.add(keyName, reducer)
      dispatch({ type: `@INIT ${keyName as string} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(keyName)
          dispatch({ type: `@REMOVE ${keyName as string} reducer` })
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
