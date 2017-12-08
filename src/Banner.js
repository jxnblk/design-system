import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Icon from './Icon'
import CloseButton from './CloseButton'
import Heading from './Heading'
import PropTypes from 'prop-types'

const bannerColors = {
  green: {
    backgroundColor: 'green',
    color: 'white',
    icon: 'success'
  },
  lightGreen: {
    backgroundColor: 'lightGreen',
    color: 'darkGreen',
    icon: 'success'
  },
  red: {
    backgroundColor: 'red',
    color: 'white',
    icon: 'warning'
  },
  lightRed: {
    backgroundColor: 'lightRed',
    color: 'darkRed',
    icon: 'warning'
  },
  orange: {
    backgroundColor: 'orange',
    color: 'white',
    icon: 'attention'
  },
  lightOrange: {
    backgroundColor: 'lightOrange',
    color: 'darkOrange',
    icon: 'attention'
  },
  blue: {
    backgroundColor: 'blue',
    color: 'white',
    icon: 'information'
  },
  lightBlue: {
    backgroundColor: 'lightBlue',
    color: 'darkBlue',
    icon: 'information'
  }
}

const Banner = props => {
  const bannerColor = bannerColors[props.bg] || {}
  const icon = props.iconName || bannerColor.icon

  return (
    <Box {...props} bg={bannerColor.backgroundColor} color={bannerColor.color}>
      <Flex justify="space-between" align="flex-start">
        {!!icon &&
          !!props.showIcon && <Icon name={icon} mr={3} size={24} mt="-2px" />}
        <Box width={1} align={props.textAlign}>
          <Heading.h5>{props.header}</Heading.h5>
          <Text.span fontSize={1}>{props.children || props.text}</Text.span>
        </Box>
        {!!props.onClose && (
          <CloseButton
            onClick={props.onClose}
            ml={3}
            size={14}
            mt={1}
            title="close"
          />
        )}
      </Flex>
    </Box>
  )
}

Banner.displayName = 'Banner'

Banner.propTypes = {
  header: PropTypes.string,
  iconName: PropTypes.string,
  onClose: PropTypes.func,
  showIcon: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  textAlign: PropTypes.string
}

Banner.defaultProps = {
  bg: 'green',
  textAlign: 'left',
  showIcon: true
}

export default Banner
