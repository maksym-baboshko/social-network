import type { Meta, StoryObj } from '@storybook/react'

import { getTranslatedCaption } from '@shared/lib/storybook'

import { Text } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: { layout: 'centered' }
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

const headingCaptions = {
  uk: 'Заголовок',
  en: 'Heading',
  nb: 'Overskrift'
}

const textCaptions = {
  uk: 'Текст',
  en: 'Text',
  nb: 'Tekst'
}

export const Both: Story = {
  args: {},
  render: (args, ctx) => {
    return (
      <Text
        heading={getTranslatedCaption(ctx.globals.locale, headingCaptions)}
        text={getTranslatedCaption(ctx.globals.locale, textCaptions)}
        {...args}
      />
    )
  }
}

export const Centred: Story = {
  args: { heading: 'Heading', text: 'Text', textAlign: 'center' }
}

export const HeadingOnly: Story = {
  args: { heading: 'Heading' }
}

export const TextOnly: Story = {
  args: { text: 'Text' }
}

export const Error: Story = {
  args: { heading: 'Error', text: 'Something went wrong', color: 'danger' }
}
