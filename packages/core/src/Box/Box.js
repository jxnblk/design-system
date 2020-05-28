import styled from 'styled-components'
import { space, width, textAlign } from 'styled-system'

import {
  applyVariations,
  color,
  deprecatedColorValue,
  deprecatedPropType,
} from '../utils'

const Box = styled.div`
  ${space} ${width} ${textAlign}
  ${color}
  ${applyVariations('Box')}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  color: deprecatedColorValue(),
  bg: deprecatedPropType('color'),
  ...textAlign.propTypes,
}

export default Box
