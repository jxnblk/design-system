import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Button } from 'pcln-design-system'
import { ChevronDown } from 'pcln-icons'
import Popover from 'pcln-popover'
import MenuList from '../MenuList'

const LinkButton = styled(Button)`
  display: flex;
  align-items: center;
`

function Menu({
  id,
  buttonNode,
  buttonProps,
  buttonText,
  contentProps,
  color,
  width,
  height,
  size,
  trapFocus,
  placement,
  children,
  ...props
}) {
  const MenuContent = ({ handleClose }) => (
    <Box {...contentProps}>
      <MenuList id={id} color={color} size={size} height={height} handleClose={handleClose}>
        {children}
      </MenuList>
    </Box>
  )

  MenuContent.propTypes = {
    handleClose: PropTypes.func,
  }

  const onKeyDown = useCallback((evt) => {
    const key = evt.key
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      evt.preventDefault()
      evt.target.click()
    }
  }, [])

  /* eslint-disable react/display-name */
  const ClickableNode = React.forwardRef((props, ref) =>
    buttonNode ? (
      React.cloneElement(buttonNode, { ref, onKeyDown, ...props })
    ) : (
      <LinkButton ref={ref} variation='link' {...props} p={2} {...buttonProps} onKeyDown={onKeyDown}>
        {buttonText}
        <ChevronDown ml={1} />
      </LinkButton>
    )
  )

  return (
    <Popover
      hideArrow
      trapFocus={trapFocus}
      width={width}
      zIndex={1600}
      placement={placement ?? 'bottom-start'}
      aria-controls={id}
      renderContent={MenuContent}
      {...props}
    >
      <ClickableNode />
    </Popover>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  id: PropTypes.string,
  buttonNode: PropTypes.node,
  buttonProps: PropTypes.shape(Button.propTypes),
  buttonText: PropTypes.node,
  contentProps: PropTypes.shape(Box.propTypes),
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  size: PropTypes.string,
  trapFocus: PropTypes.bool,
  placement: PropTypes.string,
  children: PropTypes.node,
}

Menu.defaultProps = {
  size: 'singleColumn',
  trapFocus: true,
  width: '650px',
}

export default Menu
