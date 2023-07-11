/* eslint-disable no-unused-expressions */

import React, { useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from 'styled-components'
import { zIndex } from 'styled-system'

export const ShadowOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.65);
  ${zIndex};
`

const propTypes = {
  shouldCloseOnBlur: PropTypes.bool,
  shouldOpenOnFocus: PropTypes.bool,
  zIndex: PropTypes.number,
  children: PropTypes.node,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
}

const ShadowEffect: React.FC<InferProps<typeof propTypes>> = ({
  shouldCloseOnBlur,
  shouldOpenOnFocus,
  zIndex = 'overlay',
  children,
  onClose,
  onOpen,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false)

  const child = React.Children.only(children)

  function handleOpen() {
    onOpen && onOpen()
    setOpen(true)
  }

  function handleClose() {
    onClose && onClose()
    setOpen(false)
  }

  function handleKeyDown(evt) {
    const key = evt.key
    if (key === 'Escape') {
      evt.preventDefault()
      handleClose()
    }
  }

  return (
    <>
      {isOpen && <ShadowOverlay zIndex={zIndex} onClick={handleClose} {...props} />}
      {React.cloneElement(child, {
        zIndex: isOpen && (zIndex !== 'overlay' ? zIndex : 'onOverlay'),
        onBlur: () => {
          const onBlur = child.props.onBlur
          onBlur && onBlur()
          shouldCloseOnBlur && handleClose()
        },
        onClick: () => {
          const onClick = child.props.onClick
          onClick && onClick()
          handleOpen()
        },
        onFocus: () => {
          const onFocus = child.props.onFocus
          onFocus && onFocus()
          shouldOpenOnFocus && handleOpen()
        },
        onKeyDown: (evt) => {
          const onKeyDown = child.props.onKeyDown
          onKeyDown && onKeyDown(evt)
          handleKeyDown(evt)
        },
      })}
    </>
  )
}

ShadowEffect.propTypes = propTypes

export default ShadowEffect
