/** @type { import('@storybook/react').Preview } */

import { themes } from '@storybook/theming'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'dark'
    },
    docs: {
      theme: themes.dark
    }
  }
}

export default preview
