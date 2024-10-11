import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@elysium/react'

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },

  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis eos fuga repudiandae, labore quia quasi cum qui doloremque quae nihil sapiente sint, corporis consequuntur quam similique eius impedit molestiae!',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
