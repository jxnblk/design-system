import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import {
  width,
  height,
  borderRadius,
  WidthProps,
  HeightProps,
  BorderRadiusProps,
  compose,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'
import {
  getPaletteColor,
  borderRadiusAttrs,
  borderRadiusValues,
  applyVariations,
  roundedValues,
} from '../utils'

const variations = {
  parallax: css`
    background-attachment: fixed;
  `,
  static: css`
    background-attachment: scroll;
  `,
}

export const backgroundPositionList = ['top', 'bottom', 'left', 'right', 'center']
const image = (props) => (props.image ? { backgroundImage: `url(${props.image})` } : null)

const backgroundImagePropTypes = {
  ...propTypes.height,
  ...propTypes.width,
  ...propTypes.borderRadius,
  /** background-image url */
  image: PropTypes.string,
  variation: PropTypes.oneOf(Object.keys(variations)),
  borderRadiusSize: PropTypes.oneOf(borderRadiusValues),
  rounded: PropTypes.oneOf(roundedValues),
  backgroundPosition: PropTypes.oneOf(backgroundPositionList),
}

export interface IBackgroundImageProps
  extends WidthProps,
    HeightProps,
    BorderRadiusProps,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  variation?: 'parallax' | 'static'
  image?: string
  borderRadius?: string
  rounded?: string
  backgroundPosition?: (typeof backgroundPositionList)[number]
}

const BackgroundImage: React.FC<IBackgroundImageProps> = styled.div.attrs(borderRadiusAttrs)`
  background-position: ${(props) => props.backgroundPosition};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${getPaletteColor('border.light')};
  ${applyVariations('BackgroundImage', variations)}
  ${image} 

  ${(props) => compose(height, width, borderRadius)(props)}
`

BackgroundImage.propTypes = backgroundImagePropTypes

BackgroundImage.defaultProps = {
  variation: 'static',
  backgroundPosition: 'center',
}

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage
