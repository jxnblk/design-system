import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { ChevronRight, ChevronLeft } from 'pcln-icons'
import { ARROW_SIZES } from './Arrow.styles'
import { Relative } from '../Relative'
import { Button } from '../Button'

const { bool, string, func } = PropTypes

export const arrowPropTypes = {
  isLeft: bool,
  arrowButtonVariation: string,
  size: string,
  leftArrowClick: func,
  rightArrowClick: func,
  leftDisabled: bool,
  rightDisabled: bool,
}

const Arrow: React.FC<InferProps<typeof arrowPropTypes>> = ({
  isLeft,
  arrowButtonVariation,
  size,
  leftArrowClick,
  rightArrowClick,
  leftDisabled,
  rightDisabled,
  ...props
}) => {
  const Icon = isLeft ? ChevronLeft : ChevronRight
  return (
    <Relative zIndex={99}>
      <Button
        p={0}
        variation={arrowButtonVariation}
        onClick={isLeft ? leftArrowClick : rightArrowClick}
        height={ARROW_SIZES[size].buttonSize}
        width={ARROW_SIZES[size].buttonSize}
        boxShadowSize='md'
        disabled={isLeft ? leftDisabled : rightDisabled}
        {...props}
      >
        <Icon size={ARROW_SIZES[size].iconSize} pl={isLeft ? 0 : 1} pr={isLeft ? 1 : 0} />
      </Button>
    </Relative>
  )
}

export { Arrow }
