import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box } from '..'
import { RenderInView } from './RenderInView'
import { SlideWrapper } from './SlideBox.styled'

interface ISlideProps {
  onSlideChange: PropTypes.func
  slideSpacing: PropTypes.number
  stretchHeight: PropTypes.bool
  index: PropTypes.number
  content: PropTypes.node
  isCurrentSlide: PropTypes.bool
  width: PropTypes.any
  numSlides: PropTypes.number
  slideBoxRef: PropTypes.any
}

const Slide: React.FC<ISlideProps> = ({
  onSlideChange,
  slideSpacing,
  stretchHeight,
  index,
  content,
  isCurrentSlide,
  width,
  numSlides,
  slideBoxRef,
}) => {
  const ref = useRef()

  useEffect(() => {
    /* istanbul ignore next */
    if (isCurrentSlide === true && typeof slideBoxRef?.current?.scroll === 'function' && ref?.current) {
      const { offsetLeft, offsetParent, offsetWidth } = ref.current
      const { offsetWidth: parentOffset } = offsetParent || {}
      slideBoxRef?.current?.scroll({ left: offsetLeft - parentOffset + offsetWidth })
    }
  }, [isCurrentSlide, ref])

  return (
    <SlideWrapper data-testid={`slide${index + 1}`} ref={ref} width={width}>
      <RenderInView onSlideChange={onSlideChange} index={index} slideRef={ref}>
        <Box
          height='100%'
          pl={index === 0 ? 2 : 0}
          pr={index === numSlides - 1 ? 2 : 0}
          ml={index === 0 ? 0 : slideSpacing}
          mr={index === numSlides - 1 ? 0 : slideSpacing}
        >
          {stretchHeight ? React.cloneElement(content, { style: { 'min-height': '100%' } }) : content}
        </Box>
      </RenderInView>
    </SlideWrapper>
  )
}

Slide.propTypes = {
  onSlideChange: PropTypes.func,
  slideSpacing: PropTypes.number,
  stretchHeight: PropTypes.bool,
  index: PropTypes.number,
  content: PropTypes.node,
  isCurrentSlide: PropTypes.bool,
  width: PropTypes.any,
  numSlides: PropTypes.number,
  slideBoxRef: PropTypes.any,
}

export { Slide }
