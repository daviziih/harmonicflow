import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',

  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$purple300',

        '&not(:disabled):hover': {
          backgroundColor: '$ignite300'
        },

        '&:disabled': {
          opacity: '0.6'
        }
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $purple300',

        '&not(:disabled):hover': {
          backgroundColor: '$purple300',
          color: '$white'
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          borderColor: '$gray200'
        }
      },
      tertiary: {
        color: '$gray100',

        '&not(:disabled):hover': {
          backgroundColor: '$white'
        },

        '&:disabled': {
          backgroundColor: '$gray600'
        }
      }
    },

    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
