import { ComponentProps } from 'react'
import { Icon, Input, TextInputContainer } from './styles'
import { LinkSimpleHorizontalBreak } from 'phosphor-react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: boolean
  invalid?: boolean
  disabled?: boolean
  placeholder: string
}

export function TextInput({
  icon,
  disabled,
  invalid,
  placeholder
}: TextInputProps) {
  const buttonClass = invalid ? 'button invalid' : 'button' // Aplica classe de inválido

  return (
    <TextInputContainer>
      {!!icon && (
        <Icon>
          <LinkSimpleHorizontalBreak size={16} />
        </Icon>
      )}
      <Input placeholder={placeholder} disabled={disabled} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
