import React from 'react'
import { InferProps } from 'prop-types'
import styled from 'styled-components'
import { space, fontSize, fontWeight, width } from 'styled-system'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const nowrap = (props) =>
  props.nowrap
    ? {
        whiteSpace: 'nowrap',
      }
    : null

const accessiblyHide = (props) =>
  props.hidden
    ? {
        position: 'absolute',
        width: '1px',
        height: '1px',
        clip: 'rect(1px, 1px, 1px, 1px)',
      }
    : null

const propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
  ...fontWeight.propTypes,
  ...width.propTypes,
}

const Label: React.FC<InferProps<typeof propTypes>> = styled.label`
  font-size: 10px;
  letter-spacing: 0.2px;
  display: block;
  width: 100%;
  margin: 0;
  color: ${getPaletteColor('base')};
  ${(props) => (props.bg ? `background-color: ${getPaletteColor(props.bg, 'base')(props)};` : '')}

  ${applyVariations('Label')}
  ${space} ${fontSize} ${fontWeight} ${width};
  ${nowrap}
  ${accessiblyHide}
`

Label.propTypes = propTypes

Label.defaultProps = {
  fontSize: '10px',
  fontWeight: 'bold',
  color: 'text.light',
}

Label.displayName = 'Label'
Label.isLabel = true

export default Label
