import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { createTheme } from '../utils'

export const Base = styled.div`
  font-family: ${(props) => props.theme.font};
  line-height: ${(props) => props.theme.lineHeights.standard};
  font-weight: ${(props) => props.theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
`

const propTypes = {
  /** The theme to drive the look and feel */
  theme: PropTypes.shape({
    breakpoints: PropTypes.arrayOf(PropTypes.string),
    mediaQueries: PropTypes.arrayOf(PropTypes.string),
    space: PropTypes.arrayOf(PropTypes.number),
    font: PropTypes.string,
    fontSizes: PropTypes.arrayOf(PropTypes.number),
    fontWeights: PropTypes.shape({
      medium: PropTypes.number,
      bold: PropTypes.number,
      regular: PropTypes.number,
    }),
    lineHeights: PropTypes.shape({
      standard: PropTypes.number,
      display: PropTypes.number,
    }),
    letterSpacings: PropTypes.shape({
      normal: PropTypes.string,
      caps: PropTypes.string,
    }),
    regular: PropTypes.number,
    bold: PropTypes.number,
    colors: PropTypes.object,
    palette: PropTypes.object,
    radii: PropTypes.arrayOf(PropTypes.number),
    radius: PropTypes.string,
    boxShadows: PropTypes.arrayOf(PropTypes.string),
    maxContainerWidth: PropTypes.string,
    duration: PropTypes.object,
    timingFunctions: PropTypes.object,
    transitionDelays: PropTypes.object,
  }),
  /** Array of pixel values for custom breakpoint overrides */
  customBreakpoints: PropTypes.arrayOf(PropTypes.string),
}

const ThemeProvider: React.FC<InferProps<typeof propTypes>> = ({ theme, customBreakpoints, ...props }) => {
  // Once updated to React 16.8 this should be wrapped in React.useMemo()
  const mergedTheme = (existingTheme = {}) => createTheme(existingTheme, theme, customBreakpoints)

  return (
    <StyledThemeProvider theme={mergedTheme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = propTypes

export { ThemeProvider }
