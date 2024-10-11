import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden'
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8'
      },
      md: {
        width: '$16',
        height: '$16'
      },
      lg: {
        width: '$20',
        height: '$20'
      },
      xl: {
        width: '$30',
        height: '$30'
      }
    }
  },

  defaultVariants: {
    size: 'lg'
  }
})

export const AvatarFallBack = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6'
  }
})
