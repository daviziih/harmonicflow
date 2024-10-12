import { Meta, StoryObj } from '@storybook/react'

import { CardHeader, CardHeaderProps } from '@harmonicflow/react'

export default {
  title: 'Surfaces/Card Header',

  component: CardHeader,

  parameters: {
    layout: 'centered'
  },

  args: {
    title: 'Card Header',
    as: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dignissimos voluptate laboriosam qui ratione culpa voluptates. Dolores quasi, sit voluptate accusamus soluta suscipit nulla aut ratione blanditiis ipsa, a excepturi.'
  }
} as Meta<CardHeaderProps>

export const Primary: StoryObj<CardHeaderProps> = {}
