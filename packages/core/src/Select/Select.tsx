import React from 'react'
import { InferProps } from 'prop-types'
import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import { ChevronDown } from 'pcln-icons'

import { borders, deprecatedColorValue } from '../utils'
import { Flex } from '../Flex'

const ClickableIcon = styled(ChevronDown)`
  pointer-events: none;
`

const propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  color: deprecatedColorValue(),
}

const SelectBase: React.FC<InferProps<typeof propTypes>> = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('borderRadii.lg')};
  border-width: 1px;
  border-style: solid;

  ${borders} ${space} ${fontSize}
  ::-ms-expand {
    display: none;
  }
`

SelectBase.defaultProps = {
  fontSize: [2, null, 1],
  m: 0,
  pl: 12,
  pr: 32,
  py: 14,
}

SelectBase.propTypes = propTypes

const Select = React.forwardRef((props, ref) => (
  <Flex width={1} alignItems='center'>
    <SelectBase {...props} ref={ref} />
    <ClickableIcon ml={-32} color='text.light' />
  </Flex>
))

Select.displayName = 'Select'
Select.isField = true

export default Select
