import { type Decorator } from '@storybook/react'
import { type DeepPartial } from '@reduxjs/toolkit'

import { StoreProvider } from '@app/providers/StoreProvider'
import { type AsyncReducers, type RootState } from '@shared/types/store'

const defaultAsyncReducers = {}

type WithStoreFunc = (state?: DeepPartial<RootState>, asyncReducers?: AsyncReducers) => Decorator

export const withStore: WithStoreFunc = (state, asyncReducers) => {
  const combinedAsyncReducers = { ...defaultAsyncReducers, ...asyncReducers }

  return function withStore(Story) {
    return (
      <StoreProvider initialState={state} asyncReducers={combinedAsyncReducers}>
        <Story />
      </StoreProvider>
    )
  }
}
