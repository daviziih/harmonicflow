import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Icon, Input, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: string
  invalid?: boolean
  disabled?: boolean
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ icon, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!icon && <Icon>{icon}</Icon>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  }
)

TextInput.displayName = 'TextInput'
