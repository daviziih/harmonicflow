import { Meta, StoryObj } from '@storybook/react'

import { TextInput, TextInputProps } from '@elysium/react'
import { LinkSimpleHorizontalBreak } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered'
  },

  args: {
    placeholder: 'Placeholder'
  },

  argTypes: {
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' }
  }
} as Meta<TextInputProps>

export const Base: StoryObj<TextInputProps> = {}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    icon: <LinkSimpleHorizontalBreak size={16} />
  }
}

export const WithError: StoryObj<TextInputProps> = {
  args: {
    invalid: true
  }
}
