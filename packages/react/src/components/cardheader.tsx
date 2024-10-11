import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'
import { Heading } from './heading'
import { Text } from './text'

export const CardTextContainer = styled('div', {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: 500,
  padding: '$4',
  borderRadius: '$md'
})

export const CardTitle = styled(Heading, {
  padding: '$4',
  backgroundColor: '$gray700',
  marginBottom: '$3',
  borderRadius: '$md'
})

export interface CardHeaderProps
  extends ComponentProps<typeof CardTextContainer> {
  title: string
  as: string
}

export function CardHeader({ title, as }: CardHeaderProps) {
  return (
    <div>
      <CardTextContainer>
        <CardTitle>{title}</CardTitle>
        <Text>{as}</Text>
      </CardTextContainer>
    </div>
  )
}

CardHeader.displayName = 'CardHeader'
