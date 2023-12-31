import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { src: undefined }
}

export const Photo: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=7' }
}
