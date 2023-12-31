import { memo } from 'react'

import cn from 'classnames'

import { useToggleSidebar } from '../../lib'
import { SidebarItems } from '../SidebarItems'
import { SidebarFooter } from '../SidebarFooter'

import { type SidebarFC } from './Sidebar.types'

import cls from './Sidebar.module.scss'

export const Sidebar: SidebarFC = memo(function Sidebar({ className }) {
  const { isCollapsed, onToggle } = useToggleSidebar()

  return (
    <div
      id="sidebar"
      className={cn(cls.sidebar, { [cls.collapsed]: isCollapsed }, className)}
      data-testid="sidebar"
    >
      <SidebarItems isSidebarCollapsed={isCollapsed} />
      <SidebarFooter toggleSidebar={onToggle} isSidebarCollapsed={isCollapsed} />
    </div>
  )
})
