import styled from 'styled-components'
import Button from './Button'

const GreenButton = styled(Button).attrs({
  color: 'secondary',
  variation: 'fill'
})``

GreenButton.displayName = 'GreenButton'

export default GreenButton
