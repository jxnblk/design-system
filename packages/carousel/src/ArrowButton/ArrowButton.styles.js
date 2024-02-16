import styled, { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'
import { getPaletteColor, Box } from 'pcln-design-system'
import { CarouselWrapper } from '../Carousel.styles'

const defaultStyles = (props) => `
  padding: 0;
  background: ${getPaletteColor(props.buttonBackground)(props)};
  border-radius: 100%;
  border: none;
  box-shadow: ${props.theme.shadows.md};
  color: ${getPaletteColor(props.buttonColor)(props)};
  &:hover {
    background: ${getPaletteColor(props.buttonHoverBackground)(props)};
    color: ${getPaletteColor(props.buttonHoverColor)(props)};
  }
`

const sidePositionStyles = (props) =>
  props.position === 'side'
    ? css`
        ${props.type == 'prev' ? 'left' : 'right'}: 0px;
        position: absolute;
        top: 50%;
        margin-top: -${props.overflowAdjust + 30}px;
        z-index: 2;
        ${props.showArrowsOnHover &&
        css`
          opacity: 0;
          ${CarouselWrapper} > .carousel:hover & {
            opacity: 1;
          }
        `}
      `
    : null

const sideStyles = (props) =>
  props.position === 'side'
    ? `
    ${props.type == 'prev' ? 'left' : 'right'}: 0px;
    height: ${props.buttonSize};
    width: ${props.buttonSize};
    &:disabled {
      display: none;
    }
  `
    : null

const topBottomStyles = (props) =>
  props.position !== 'side'
    ? `
    width: 40px;
    height: 40px;
    &:disabled {
      opacity: 40%;
      color: ${getPaletteColor('border.base')(props)} !important;
      background: ${getPaletteColor('background.lightest')(props)} !important;
      box-shadow: ${props.theme.shadows.md};
    }
  `
    : null

const Wrapper = styled(Box)`
  transition: opacity ${themeGet('duration.normal')};
  ${sidePositionStyles}
  & > button {
    ${defaultStyles}
    ${topBottomStyles}
    ${sideStyles}
  }
`

export { Wrapper }
