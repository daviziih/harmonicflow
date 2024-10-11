import { ComponentProps } from 'react'
import { Icon, Input, TextInputContainer } from './styles'
import { LinkSimpleHorizontalBreak } from 'phosphor-react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: string
  invalid?: boolean
  disabled?: boolean
}

export function TextInput({ icon, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!icon && <Icon>{icon}</Icon>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
