import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from 'pcln-design-system'
import { ChevronDown } from 'pcln-icons'
import Popover from 'pcln-popover'
import MenuList from '../MenuList'

const LinkButton = styled(Button)`
  display: flex;
  align-items: center;
`

function Menu({
  id,
  buttonText,
  buttonProps,
  color,
  width,
  height,
  size,
  children,
  ...props
}) {
  const MenuContent = ({ handleClose }) => (
    <MenuList
      id={id}
      color={color}
      size={size}
      height={height}
      handleClose={handleClose}
    >
      {children}
    </MenuList>
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

  return (
    <Popover
      hideArrow
      trapFocus
      width={width}
      zIndex={1600}
      placement='bottom'
      aria-controls={id}
      renderContent={MenuContent}
      {...props}
    >
      <LinkButton variation='link' p={2} {...buttonProps} onKeyDown={onKeyDown}>
        {buttonText}
        <ChevronDown ml={1} />
      </LinkButton>
    </Popover>
  )
}

Menu.displayName = 'Menu'

Menu.propTypes = {
  id: PropTypes.string,
  buttonText: PropTypes.string,
  buttonProps: PropTypes.object,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  size: PropTypes.string,
  children: PropTypes.node,
}

Menu.defaultProps = {
  width: '650px',
  size: 'singleColumn',
}

export default Menu
