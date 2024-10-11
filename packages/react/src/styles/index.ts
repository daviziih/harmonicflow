import { createStitches, defaultThemeMap } from '@stitches/react'

import {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  fonts,
  space
} from '@elysium/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  config
} = createStitches({
  themeMap: { ...defaultThemeMap, height: 'space', width: 'space' },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
})
