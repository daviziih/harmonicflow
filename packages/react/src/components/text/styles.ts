import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'outside',

  '&:has(input:focus)': {
    borderColor: '$purple300',
    svg: {
      color: '$purple300'
    }
  },

  '&:has(input:disabled)': {
    opacity: 0.5
  },

  '&:has(input:invalid)': {
    opacity: 0.5,
    borderColor: 'red'
  }
})

export const Icon = styled('div', {
  marginRight: '$1',
  color: '$gray400'
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$gray400',
  fontWeight: 'regular',
  background: 'transparent',
  minWidth: 240, // Arrumar aqui
  border: 0,

  '&:focus': {
    outline: 1
  },

  '&:invalid': { borderColor: '$red400' },

  '&:placeholder': {
    color: '$gray400'
  }
})
