import { Meta, StoryObj } from '@storybook/react'

import { Card, CardProps, Text } from '@elysium/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },

  args: {
    children: (
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        assumenda eum quidem dolores ipsa temporibus id fugit, adipisci itaque
        non, eius impedit neque. Quia nemo aspernatur excepturi architecto
        repudiandae laboriosam?
      </Text>
    )
  },

  argTypes: {
    children: {
      control: {
        type: null
      } as any
    }
  }
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
