import { createBrowserRouter } from 'react-router-dom'

import {
  getRootRoute,
  getFeedRoute,
  getAboutRoute,
  getProfileRoute,
  getSettingsRoute,
  getNotFoundRoute,
  getPostRoute
} from '@shared/constants/router'
import { RootPage } from '@pages/root'
import { PostPage } from '@pages/post'
import { PageError } from '@pages/error'
import { AboutPage } from '@pages/about'
import { ProfilePage } from '@pages/profile'
import { RootLayout } from '@pages/root-layout'
import { NotFoundPage } from '@pages/not-found'

export const router = createBrowserRouter([
  {
    id: 'root',
    path: getRootRoute(),
    Component: RootLayout,
    ErrorBoundary: PageError,
    children: [
      {
        index: true,
        Component: RootPage
      },
      {
        path: getPostRoute(':id'),
        Component: PostPage
      },
      {
        path: getFeedRoute(),
        Component: AboutPage
      },
      {
        path: getProfileRoute(':id'),
        Component: ProfilePage
      },
      {
        path: getSettingsRoute(),
        Component: AboutPage
      },
      {
        path: getAboutRoute(),
        Component: AboutPage
      },
      {
        path: getNotFoundRoute(),
        Component: NotFoundPage
      },
      {
        path: '*',
        Component: NotFoundPage
      }
    ]
  }
])
