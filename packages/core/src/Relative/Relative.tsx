import React from 'react'
import styled from 'styled-components'
import {
  BottomProps,
  LeftProps,
  RightProps,
  TopProps,
  ZIndexProps,
  bottom,
  left,
  right,
  top,
  zIndex,
} from 'styled-system'
import { Box, BoxProps } from '../Box'

export type RelativeProps = TopProps & RightProps & BottomProps & LeftProps & ZIndexProps & BoxProps

export const Relative: React.FC<RelativeProps> = styled(Box)`
  position: relative;
  ${top} ${bottom} ${left} ${right}
  ${zIndex}
`

Relative.displayName = 'Relative'
