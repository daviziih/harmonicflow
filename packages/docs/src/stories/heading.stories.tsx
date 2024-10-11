import { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@harmonic/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },

  args: {
    children: 'Title',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
