import { memo, type FC, Suspense } from 'react'

import cn from 'classnames'
import { Outlet } from 'react-router-dom'

import { Navbar } from '@widgets/Navbar'
import { Sidebar } from '@widgets/Sidebar'
import { useAuthGuard } from '@shared/hooks/common'
import { PageLoader } from '@shared/ui/PageLoader'

import { useLoadState } from '../lib'

import cls from './RootLayout.module.scss'

export const RootLayout: FC = memo(function RootLayout() {
  const { isAccessAllowed, isAccessDenied } = useAuthGuard()

  useLoadState()

  return (
    <div id="app">
      <Navbar />

      <div id="content" className={cls.content}>
        {isAccessAllowed && <Sidebar />}

        <div id="page" className={cn(cls.page, isAccessDenied && cls.denied)}>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
})
