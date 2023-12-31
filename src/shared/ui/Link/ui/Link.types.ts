import { type FC } from 'react'

import { type LinkProps as RouterLinkProps } from 'react-router-dom'

enum LinkColor {
  PRIMARY = 'primary'
}

enum LinkUnderline {
  NONE = 'none',
  HOVER = 'hover',
  ALWAYS = 'always',
  ACTIVE = 'active',
  FOCUS = 'focus'
}

export interface LinkProps extends RouterLinkProps {
  color?: EnumAsUnion<typeof LinkColor>
  underline?: EnumAsUnion<typeof LinkUnderline>
  isNavLink?: boolean
  activeLinkCN?: string
  disabled?: boolean
  exact?: boolean
  end?: boolean
}

export type LinkFC = FC<LinkProps>
