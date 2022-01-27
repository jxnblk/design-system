import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'

import { Image } from '../Image'

const RandomImage = styled(Image)`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`

const determineSRC = (blur, chooseSrc, height, width) => {
  const imageURLs = [
    `http://placeimg.com/${width}/${height}/any`,
    `http://placekitten.com/${width}/${height}`,
    `https://picsum.photos/${width}/${height}`,
    `https://source.unsplash.com/${width}x${height}`,
    `https://www.fillmurray.com/${width}/${height}`,
  ]

  if (blur || chooseSrc) {
    return blur ? `https://picsum.photos/${width}/${height}?blur` : imageURLs[chooseSrc]
  }

  const randomNum = Math.floor(Math.random() * imageURLs.length)
  return imageURLs[randomNum]
}

const propTypes = {
  ariaHidden: PropTypes.bool,
  blur: PropTypes.bool,
  chooseSrc: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

const PlaceholderImage: React.FC<InferProps<typeof propTypes>> = (props) => {
  const { alt, ariaHidden, blur, chooseSrc, className, height, width } = props

  return (
    <RandomImage
      alt={alt || 'Random image used for placeholder content'}
      aria-hidden={ariaHidden}
      blur={blur}
      className={className}
      height={height}
      src={determineSRC(blur, chooseSrc, height, width)}
      width={width}
    />
  )
}

PlaceholderImage.displayName = 'PlaceholderImage'

PlaceholderImage.propTypes = propTypes

PlaceholderImage.defaultProps = {
  ariaHidden: true,
  blur: false,
  height: '500',
  width: '500',
}

export default PlaceholderImage
