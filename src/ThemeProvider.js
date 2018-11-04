import React from 'react'
import PropTypes from 'prop-types'
import styled, {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from 'styled-components'
import nextTheme from './theme'
import legacyTheme from './legacyTheme'

injectGlobal`body {
  margin: 0;
}`

export const Base = styled.div`

  @import url(‘https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
  @import url("https://use.typekit.net/pch6hwb.css");

  font-family: ${props => props.theme.font};
  line-height: 1.4;

  * {
    box-sizing: border-box;
  }
`

const ThemeProvider = ({ legacy, customBreakpoints, ...props }) => {
  const baseTheme = legacy ? legacyTheme : nextTheme
  const breakpoints = customBreakpoints || baseTheme.breakpoints
  const theme = {
    ...baseTheme,
    breakpoints
  }

  return (
    <StyledThemeProvider theme={theme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  /** Enable legacy color palette */
  legacy: PropTypes.bool,
  /** Array of pixel values for custom breakpoint overrides */
  customBreakpoints: PropTypes.arrayOf(PropTypes.number)
}

export default ThemeProvider
