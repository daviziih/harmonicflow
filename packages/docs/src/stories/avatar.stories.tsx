import { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@elysium/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered'
  },

  args: {
    src: 'https://github.com/daviziih.png',
    alt: 'Davi Gabriel',
    size: 'lg'
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' }
    },
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
