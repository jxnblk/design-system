import { themeGet } from '@styled-system/theme-get'
import { BoxChecked, BoxEmpty, Check, RadioChecked, RadioEmpty } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Toggle } from '../Toggle/Toggle'
import { getPaletteColor } from '../utils/utils'
import { type PaletteColor } from '../theme/theme'

/**
 * @public
 */
export const RadioCheckToggleCardCardTypes = ['radio', 'checkbox', 'toggle'] as const

/**
 * @public
 */
export const RadioCheckToggleCardHPositions = ['left', 'right'] as const

/**
 * @public
 */
export const RadioCheckToggleCardVPositions = ['top', 'center'] as const

/**
 * @public
 */
export type TCardTypes = (typeof RadioCheckToggleCardCardTypes)[number]

/**
 * @public
 */
export type THPositions = (typeof RadioCheckToggleCardHPositions)[number]

/**
 * @public
 */
export type TVPositions = (typeof RadioCheckToggleCardVPositions)[number]

/**
 * @public
 */
export type RadioCheckToggleCardProps = {
  backgroundColor?: PaletteColor
  cardType?: TCardTypes
  children?: React.ReactNode
  hPosition?: THPositions
  isSelected: boolean
  isTakingFullHeightOfCard?: boolean
  isTitleBold?: boolean
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  title: string | React.ReactElement
  value: string
  vPosition?: TVPositions
}

const CombinedInput = styled.input`
  appearance: none;
  opacity: 0;
  position: absolute;
  z-index: 0;

  &:hover + div {
    border-color: ${getPaletteColor('primary.base')};

    & svg {
      color: ${getPaletteColor('primary.base')};
    }
  }

  &:focus-visible + div div.cardIcon > svg {
    border-color: ${getPaletteColor('text.light')};
    box-shadow: inset 0 0 0 5px ${getPaletteColor('background.light')};
  }

  &:active + div,
  &:checked:hover + div {
    border-color: ${getPaletteColor('primary.dark')};

    & div.cardIcon > svg {
      color: ${getPaletteColor('primary.dark')};
    }
  }

  &:checked + div {
    background-color: ${getPaletteColor('primary.light')};
    border: 1px solid ${getPaletteColor('primary.base')};

    & div.cardIcon > svg {
      color: ${getPaletteColor('primary.base')};
    }
  }

  &:checked:focus-visible + div div.cardIcon > svg {
    border-color: ${getPaletteColor('primary.dark')};
  }
`

const RCTCardContainer = styled(Flex)`
  border: 1px solid transparent;
  border-radius: ${themeGet('borderRadii.action-lg')};
  box-shadow: ${themeGet('shadows.sm')};
  cursor: pointer;
  padding: ${themeGet('space.3')};
`

const CardHeader = styled(Flex)`
  min-width: 0;
  width: 100%;

  & + * {
    margin-top: ${themeGet('space.3')};
  }
`

const StyledTitle = styled(Box)`
  font-weight: ${(props) => (props.isTitleBold ? '700' : '500')};
  font-size: ${(props) => (props.isTitleBold ? '16px' : '14px')};
  line-height: 24px;
`

const CardContent = styled(Box)`
  flex: 1;

  & > :first-child + * {
    margin-top: ${themeGet('space.3')};
  }
`

const CardIcon = styled(Box)`
  line-height: 0px;
  margin: ${(props) => (props.hPosition === 'left' ? `0 16px 0 0` : `0 0 0 16px`)};

  & > svg {
    border: 1px solid transparent;
    border-radius: ${(props) => (props.cardType === 'checkbox' ? '4px' : '9999px')};
    color: ${getPaletteColor('text.light')};
    padding: 2px;
  }
`

const RadioIcon = ({ checked, ...props }) => {
  return checked ? <RadioChecked {...props} /> : <RadioEmpty {...props} />
}

const CheckboxIcon = ({ checked, ...props }) => {
  return checked ? <BoxChecked {...props} /> : <BoxEmpty {...props} />
}

const ToggleIcon = ({ checked, onChange, ...props }) => {
  const checkIcon = <Check size='16' />
  return (
    <Box {...props}>
      <Toggle height={24} isOn={checked} icon={checkIcon} onToggle={onChange} />
    </Box>
  )
}

const buttonIcon = (cardType: TCardTypes) => {
  if (cardType === 'radio') {
    return RadioIcon
  } else if (cardType === 'checkbox') {
    return CheckboxIcon
  } else if (cardType === 'toggle') {
    return ToggleIcon
  }
}

/**
 * @public
 */
export function RadioCheckToggleCard({
  backgroundColor = 'background.lightest',
  cardType = 'radio',
  children,
  hPosition = 'right',
  isSelected,
  isTakingFullHeightOfCard = false,
  isTitleBold = false,
  name,
  onChange = () => {},
  title,
  value,
  vPosition = 'top',
}: RadioCheckToggleCardProps) {
  const id = `${name}_${value}`
  const ButtonIcon = buttonIcon(cardType)

  return (
    <label htmlFor={id} data-testId='rdt-card-label'>
      <CombinedInput
        role={cardType === 'radio' ? 'radio' : 'checkbox'}
        id={id}
        name={name}
        value={value}
        type={cardType === 'radio' ? 'radio' : 'checkbox'}
        onChange={onChange}
        checked={isSelected}
      />
      <RCTCardContainer flexDirection='column' data-testId='rdt-card-main' color={backgroundColor}>
        <CardHeader
          alignItems={vPosition}
          flexDirection={hPosition === 'left' ? 'row-reverse' : 'row'}
          data-testId='rdt-card-header'
        >
          <CardContent>
            <StyledTitle isTitleBold={isTitleBold} data-testId='rdt-card-title'>
              {title}
            </StyledTitle>
            {isTakingFullHeightOfCard && children}
          </CardContent>
          <CardIcon className='cardIcon' cardType={cardType} hPosition={hPosition}>
            <ButtonIcon checked={isSelected} onChange={onChange} size='24' />
          </CardIcon>
        </CardHeader>
        {!isTakingFullHeightOfCard && children}
      </RCTCardContainer>
    </label>
  )
}

RadioCheckToggleCard.displayName = 'RadioCheckToggleCard'
