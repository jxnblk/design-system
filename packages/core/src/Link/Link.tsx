import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { width, space, WidthProps, SpaceProps } from 'styled-system'

import { buttonStyles } from '../Button'
import { applyVariations, getPaletteColor, deprecatedColorValue } from '../utils'

const variations = {
  fill: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
  link: css`
    cursor: pointer;
    text-decoration: none;
    color: ${getPaletteColor('base')};

    &:hover {
      color: ${getPaletteColor('dark')};
      text-decoration: underline;
    }
  `,
  outline: css`
    &:hover {
      text-decoration: none;
    }

    ${buttonStyles}
  `,
}

const propTypes = {
  color: deprecatedColorValue(),
  disabled: PropTypes.bool,
  variation: PropTypes.oneOf(Object.keys(variations)),
}

export interface ILinkProps
  extends WidthProps,
    SpaceProps,
    React.HTMLAttributes<HTMLAnchorElement>,
    React.RefAttributes<unknown> {
  children?: React.ReactNode | string
  color?: string
  disabled?: boolean
  href?: string
  size?: 'small' | 'medium' | 'large'
  target?: string
  variation?: 'fill' | 'link' | 'outline'
  onClick?: (unknown) => unknown
  onFocus?: (unknown) => unknown
  rel?: string
}

const Link: React.FC<ILinkProps> = styled.a.attrs(({ color, disabled, href, target, onClick, ...props }) => ({
  color: disabled ? 'text.light' : color,
  disabled,
  href: !disabled ? href : undefined,
  rel: target === '_blank' ? 'noopener' : null,
  target,
  onClick: !disabled ? onClick : () => {},
  ...props,
}))`
  ${applyVariations('Link', variations)}
  ${width} ${space};

  ${(props) =>
    props.disabled &&
    `
    cursor: default;

    &:hover {
      text-decoration: none;
    }
  `}
`

Link.displayName = 'Link'

Link.defaultProps = {
  color: 'primary',
  variation: 'link',
  size: 'medium',
}

Link.propTypes = propTypes

export default Link
