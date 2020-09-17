import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Popper } from 'react-popper'
import {
  Box,
  getPaletteColor,
  deprecatedPropType,
  getSCMigrationRef,
} from 'pcln-design-system'
import FocusLock from 'react-focus-lock'

import PopoverArrow from '../Arrow'
import Overlay from '../Overlay'
import DEFAULTS_MODIFIERS from '../helpers/defaultModifiers'

class PopoverContent extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleKeyUp = (evt) => {
    const { onCloseRequest } = this.props
    const keys = {
      // Target ESC key
      27: () => {
        onCloseRequest()
      },
    }

    if (keys[evt.keyCode]) {
      evt.stopPropagation()
      evt.preventDefault()
      keys[evt.keyCode]()
    }
  }

  calcOffset = (placement) => {
    // Need to account for the padding added around the popover, this fixes the offset at the start and end position
    if (RegExp('start*').test(placement)) {
      return '-16px'
    } else if (RegExp('end*').test(placement)) {
      return '16px'
    } else {
      return 0
    }
  }

  getBorderColorName(color, borderColor) {
    let borderColorName = borderColor

    if (!borderColor) {
      if (color) {
        borderColorName = color
      } else {
        borderColorName = 'border.base'
      }
    }

    return borderColorName
  }

  render() {
    const {
      className,
      contentRef,
      idx,
      onCloseRequest,
      overlayOpacity,
      placement,
      renderContent,
      trapFocus,
      hideArrow,
    } = this.props
    const styleProps = {
      borderColor: this.getBorderColorName(
        this.props.color,
        this.props.borderColor
      ),
      zIndex: this.props.zIndex,
      width: this.props.width,
    }
    let color = this.props.color ? this.props.color : 'background.lightest'

    const content = trapFocus ? (
      <FocusLock>
        {renderContent({
          handleClose: onCloseRequest,
        })}
      </FocusLock>
    ) : (
      renderContent({
        handleClose: onCloseRequest,
      })
    )

    return ReactDOM.createPortal(
      <React.Fragment>
        <Popper
          positionFixed={true}
          modifiers={{
            ...DEFAULTS_MODIFIERS,
            offset: {
              offset: this.calcOffset(placement),
            },
          }}
          {...this.props}
        >
          {({ placement, ref, style, arrowProps }) => (
            // Need to be a native element, because of ref forwarding limitations with DS functional components
            <PopperGuide
              className={className}
              {...{ [getSCMigrationRef()]: ref }}
              style={style}
              data-placement={placement}
              {...styleProps}
              role='dialog'
              aria-describedby={`dialog-description-${idx}`}
            >
              <ContentContainer
                {...{ [getSCMigrationRef()]: contentRef }}
                ref={contentRef}
                {...styleProps}
                tabIndex='-1'
              >
                <Content color={color} id={`popover-description-${idx}`}>
                  {content}
                </Content>
              </ContentContainer>
              {!hideArrow && (
                <PopoverArrow
                  arrowProps={arrowProps}
                  placement={placement}
                  color={color}
                  borderColor={styleProps.borderColor}
                />
              )}
            </PopperGuide>
          )}
        </Popper>
        <Overlay
          handleClick={onCloseRequest}
          zIndex={styleProps.zIndex - 1}
          overlayOpacity={overlayOpacity}
        />
      </React.Fragment>,
      // Append each instance of the Popover as portal directly to the body
      document.querySelector('body')
    )
  }
}

const PopperGuide = styled(Box)`
  padding: 16px;
  z-index: ${({ zIndex }) => (zIndex < 0 ? 1 : zIndex)}
  max-width: ${({ width }) => width}px;
  width: 100%;
  box-sizing: border-box;
`
const ContentContainer = styled.section`
  box-shadow: 0 0 0 1px
      ${(props) => getPaletteColor(props.borderColor, 'base')(props)},
    0 0 4px 0 rgba(0, 0, 0, 0.08), 0 8px 8px 0 rgba(0, 0, 0, 0.08),
    0 16px 16px 0 rgba(0, 0, 0, 0.08);
  font-size: ${themeGet('fontSizes.0')}px;
  border-radius: ${themeGet('radius')};
  box-sizing: border-box;
  outline: 0;
  max-width: 100%;
`

const Content = styled(Box)`
  border-radius: ${themeGet('radius')};
`

PopoverContent.propTypes = {
  idx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // ID needs to be required for A11y purposes. We need to uniquely identify each popover on screen
  renderContent: PropTypes.func.isRequired,
  onCloseRequest: PropTypes.func.isRequired,
  contentRef: PropTypes.object,
  className: PropTypes.string,
  p: PropTypes.number,
  color: PropTypes.string,
  bg: deprecatedPropType('color'),
  borderColor: PropTypes.string,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  width: PropTypes.number,
  overlayOpacity: PropTypes.number,
  trapFocus: PropTypes.bool,
  hideArrow: PropTypes.bool,
}

PopoverContent.defaultProps = {
  p: 2,
  placement: 'top',
  zIndex: 102,
  width: 400,
}

export default PopoverContent
