import { lazy } from 'react'

// export const MainPageAsync = lazy(async () => await import('./MainPage'))

export const MainPageAsync = lazy(
  async () =>
    await new Promise((res) =>
      setTimeout(() => {
        // @ts-expect-error - Temporary solution
        res(import('./MainPage'))
      }, 1500)
    )
)
