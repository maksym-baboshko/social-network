import { memo, useMemo } from 'react'

import cn from 'classnames'

import { useTheme } from '@shared/hooks/ui'

import { getDefaultAvatar } from '../lib'

import { type AvatarFC } from './Avatar.types'

import cls from './Avatar.module.scss'

export const Avatar: AvatarFC = memo(function Avatar(props) {
  const { className, src, size = 'md', alt, isLoading, ...imgProps } = props
  const { theme } = useTheme()

  const avatar = useMemo(() => src || getDefaultAvatar(theme), [theme, src])

  return (
    <div className={cn(cls.avatar, { [cls[size]]: size, [cls.loading]: isLoading }, className)}>
      <img src={avatar} alt={alt ?? 'Avatar'} {...imgProps} />
      {isLoading && <div className={cls.spinner} />}
    </div>
  )
})
