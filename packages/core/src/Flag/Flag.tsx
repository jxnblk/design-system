import React from 'react'
import { InferProps } from 'prop-types'
import styled, { withTheme } from 'styled-components'
import styledSystemPropTypes from '@styled-system/prop-types'
import themeGet from '@styled-system/theme-get'

import { Flex } from '../Flex'
import { Hide } from '../Hide'
import { Box } from '../Box'
import { applyVariations, getPaletteColor, hasPaletteColor, color, deprecatedColorValue } from '../utils'

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const shadowColor = (props) => {
  const darkColor = hasPaletteColor(props)
    ? getPaletteColor('dark')(props)
    : themeGet(`colors.dark${capitalize(props.color)}`)(props)

  return {
    backgroundImage: !darkColor
      ? `
        linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.5) 50%),
        linear-gradient(45deg, transparent 50%, ${props.color} 50%)
      `
      : `linear-gradient(45deg, transparent 50%, ${darkColor} 50%)`,
  }
}

const FlagShadow = styled(Box)`
  width: 8px;
  height: 8px;
  align-self: flex-end;
  background-color: inherit;
  ${shadowColor};
  position: absolute;
  bottom: 0;
`

const FlagRight = styled(Box)`
  flex: none;
  background-color: ${(props) => getPaletteColor('base')(props) || props.color};
  border-radius: 0 ${themeGet('radius')} ${themeGet('radius')} 0;
  /* for 32 x 8 triangle */
  transform: skew(-14deg);
  position: relative;
  z-index: 1;
`

const flexAuto = (props) =>
  props.flexAuto
    ? {
        flex: '1 1 auto',
      }
    : null

const FlagBody = styled(Box)`
  font-size: ${themeGet('fontSizes.0')}px;
  border-radius: 0 0 ${themeGet('radius')} 0;
  ${flexAuto} ${color};
  z-index: 2;
`

const RelativeHide = styled(Hide)`
  position: relative;
`

const StyledFlex = styled(Flex)`
  ${applyVariations('Flag')}
`

const propTypes = {
  color: deprecatedColorValue(),
  bg: deprecatedColorValue(),
  ...styledSystemPropTypes.space,
}

const Flag: React.FC<InferProps<typeof propTypes>> = ({
  color,
  bg,
  children,
  pl,
  pr,
  py,
  width,
  ...props
}) => (
  <StyledFlex width={width} {...props} ml={[0, -2]} data-testid='flag'>
    <RelativeHide xs>
      <FlagShadow width='4px' mr={-2} mb={-2} color={hasPaletteColor({ color, ...props }) ? color : bg} />
    </RelativeHide>
    <FlagBody
      flexAuto={!!width}
      color={color}
      bg={hasPaletteColor({ color, ...props }) ? false : bg}
      pl={pl}
      pr={pr}
      py={py}
      data-testid='flag-body'
    >
      {children}
    </FlagBody>
    <FlagRight width='18px' color={hasPaletteColor({ color, ...props }) ? color : bg} ml={-2} />
  </StyledFlex>
)

Flag.propTypes = propTypes

Flag.defaultProps = {
  color: 'white',
  bg: 'green',
  pl: [1, 3],
  pr: null,
  py: [1, 2],
}

Flag.displayName = 'Flag'

export default withTheme(Flag)
