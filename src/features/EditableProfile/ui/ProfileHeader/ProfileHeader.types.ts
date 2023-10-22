import { type FC } from 'react'

interface ProfileHeaderProps {
  username: string | undefined
  readonly: boolean
  isEditing: boolean
  onEditing: () => void
  onCancelEditing: () => void
  onSave: () => void
}

export type ProfileHeaderFC = FC<ProfileHeaderProps>
