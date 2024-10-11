import { Meta } from '@storybook/react'

import { ColorsGrid } from '../../components/ColorsGrid'

import '../../../global.css'

export default {
  title: 'Colors',
  tags: ['!autodocs'],
  parameters: { options: { showPanel: false } }
} as Meta

export function Colors() {
  return (
    <div className="containerColor">
      <ColorsGrid />
    </div>
  )
}
