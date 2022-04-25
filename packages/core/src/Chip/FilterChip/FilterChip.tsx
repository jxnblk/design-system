import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { space, fontSize } from 'styled-system'
import { Close } from 'pcln-icons'
import { ChipContent } from '../ChipContent'
import { ChipLabel } from '../ChipLabel'
import { ChipInput } from '../ChipInput'

const getTitle = ({ disabled, actionTitle }) => `${actionTitle}${disabled ? ' disabled' : ''}`

const propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  facet: PropTypes.string,
  label: PropTypes.string,
  bridgeLabel: PropTypes.string,
  BridgeIcon: PropTypes.node,
  Icon: PropTypes.node,
  showActionIcon: PropTypes.bool,
  Image: PropTypes.object,
  actionTitle: PropTypes.string,
  value: PropTypes.string,
}

const FilterChip: React.FC<InferProps<typeof propTypes>> = ({
  id,
  name,
  disabled,
  selected,
  children,
  onClick,
  label,
  showActionIcon,
  actionTitle,
  value,
  ...props
}) => (
  <ChipLabel htmlFor={id} {...props}>
    <ChipInput
      type='checkbox'
      role='checkbox'
      id={id}
      name={name}
      data-testid={id}
      disabled={disabled}
      checked={selected}
      onChange={onClick}
      value={value}
    />
    <ChipContent
      label={label}
      disabled={disabled}
      selected={selected}
      action={
        showActionIcon && {
          Icon: Close,
          title: getTitle({ disabled, actionTitle }),
        }
      }
      {...props}
    >
      {children}
    </ChipContent>
  </ChipLabel>
)

FilterChip.displayName = 'FilterChip'

FilterChip.propTypes = propTypes

FilterChip.defaultProps = {
  color: 'primary',
  actionTitle: 'Close',
}

export default FilterChip
