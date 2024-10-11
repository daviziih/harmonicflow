import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@harmonic/react'

export default {
  title: 'Surfaces/Card',
  component: Box,
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
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
