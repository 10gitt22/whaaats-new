import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error
      setTimeout(() => resolve(import('./About')), 500)
    })
)
