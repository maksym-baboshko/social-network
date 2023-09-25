import { MainPage } from '@pages/main'
import { AboutPage } from '@pages/about'
import { type AppRoutesProps } from '@shared/types/router'

import {
  AppRoutes,
  getMainRoute,
  getAboutRoute
} from '@shared/constants/router'

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: getAboutRoute(),
    element: <AboutPage />
  }
}