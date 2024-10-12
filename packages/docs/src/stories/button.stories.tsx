import { Meta, StoryObj } from '@storybook/react'

import { ArrowRight } from 'phosphor-react'

import { Button, ButtonProps } from '@harmonicflow/react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight width={'bold'} />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
