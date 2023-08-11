import React, { useState } from 'react'
import { Departure } from 'pcln-icons'
import ChoiceChip from './ChoiceChip'
import { Box } from '../../Box'
import { Text } from '../../Text'
import { chipWithShadowVariationArgs } from '../../storybook/args'
import { Flex } from '../../Flex'

const image = (
  <img src='https://www.priceline.com/sam/air/carrier_logos/airLogo_DL.png' alt='Delta' height='24' />
)

const small = {
  title: 'Small',
  value: 'sm',
}

const medium = {
  title: 'Medium',
  value: 'md',
}

const responsive = {
  title: 'Responsive',
  value: ['sm', 'sm', 'sm', 'md'],
}

const getExamples = (exampleProps, sizes) => (
  <Box>
    {sizes.map((size) => (
      <Box m={3} key={size.title}>
        <Text>{size.title}</Text>
        <Box>
          {exampleProps.map((props, i) => (
            <ChoiceChip
              key={`chip${size.title}${i}`}
              id={`chip${size.title}${i}`}
              name={size.title}
              m={1}
              size={size.value}
              {...props}
            />
          ))}
        </Box>
      </Box>
    ))}
  </Box>
)

//Label Only
const labelOnly = [
  { label: 'Enabled' },
  { label: 'Active', selected: true },
  { label: 'Disabled', disabled: true },
  { label: 'Active and Disabled', selected: true, disabled: true },
]
export const LabelOnly = () => getExamples(labelOnly, [small, medium, responsive])

const noTextWrap = [
  { label: 'Lots of Words that Do Not Wrap' },
  { label: 'Long Words and Things!', selected: true },
  { label: 'This Is A Test Disabled', disabled: true },
  { label: 'This Is A Test Active and Disabled', selected: true, disabled: true },
]
export const NoTextWrap = () => getExamples(noTextWrap, [small, medium, responsive])

//With Icon
const withIcon = [
  { label: 'Enabled', Icon: Departure },
  { label: 'Active', selected: true, Icon: Departure },
  { label: 'Disabled', disabled: true, Icon: Departure },
  { label: 'Active and Disabled', selected: true, disabled: true, Icon: Departure },
]
export const WithIcon = () => getExamples(withIcon, [small, medium, responsive])

//With Facet
const withFacet = [
  { label: 'Enabled', facet: '(00)' },
  { label: 'Active', facet: '(00)', selected: true },
  { label: 'Disabled', facet: '(00)', disabled: true },
  { label: 'Active and Disabled', facet: '(00)', selected: true, disabled: true },
]
export const WithFacet = () => getExamples(withFacet, [small, medium, responsive])

//With Facet And Icon
const withFacetAndIcon = [
  { label: 'Enabled', facet: '(00)', Icon: Departure },
  { label: 'Active', facet: '(00)', Icon: Departure, selected: true },
  {
    label: 'Disabled',
    facet: '(00)',
    Icon: Departure,
    disabled: true,
  },
  {
    label: 'Active and Disabled',
    facet: '(00)',
    Icon: Departure,
    selected: true,
    disabled: true,
  },
]
export const WithIconAndFacet = () => getExamples(withFacetAndIcon, [small, medium, responsive])

//Icon Only
const iconOnly = [
  { Icon: Departure, title: 'Departure' },
  { selected: true, Icon: Departure, title: 'Departure' },
  { disabled: true, Icon: Departure, title: 'Departure' },
  { selected: true, disabled: true, Icon: Departure, title: 'Departure' },
]
export const IconOnly = () => getExamples(iconOnly, [small, medium, responsive])

//With Image
const withImage = [
  { label: 'Enabled', image: image },
  { label: 'Active', selected: true, image: image },
  { label: 'Disabled', disabled: true, image: image },
  { label: 'Active and Disabled', selected: true, disabled: true, image: image },
]
export const WithImage = () => getExamples(withImage, [medium])

//With Image And Bridge Label
const withImageAndBridgeLabel = [
  { label: 'Enabled', image: image, bridgeLabel: 'Bridge' },
  { label: 'Active', selected: true, image: image, bridgeLabel: 'Bridge' },
  {
    label: 'Disabled',
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
  {
    label: 'Active and Disabled',
    selected: true,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
]
export const WithImageAndBridgeLabel = () => getExamples(withImageAndBridgeLabel, [medium])

//With Image And Bridge Label
const withImageBridgeLabelAndTopLabel = [
  {
    label: 'Enabled',
    image: image,
    bridgeLabel: 'Bridge',
    topLabel: 'Departure Flight',
    borderRadius: 'lg',
    width: '300px',
    justifyContent: 'flex-start',
  },
  {
    label: 'Active',
    selected: true,
    image: image,
    bridgeLabel: 'Bridge',
    topLabel: 'Departure Flight',
    borderRadius: 'lg',
  },
  {
    label: 'Disabled',
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
    topLabel: 'Departure Flight',
    borderRadius: 'lg',
  },
  {
    label: 'Active and Disabled',
    selected: true,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
    topLabel: 'Departure Flight',
    borderRadius: 'lg',
  },
]
export const WithImageBridgeLabelAndTopLabel = () => getExamples(withImageBridgeLabelAndTopLabel, [medium])

//Image Only
const imageOnly = [
  { image: image },
  { selected: true, image: image },
  { disabled: true, image: image },
  { selected: true, disabled: true, image: image },
]
export const ImageOnly = () => getExamples(imageOnly, [medium])

//Custom Chip
export const CustomChip = () => (
  <Box m={2}>
    <ChoiceChip id='customChip1' name='customChoice' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Browse All
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          $161 avg. per night
        </Text>
      </Box>
    </ChoiceChip>
    <ChoiceChip id='customChip2' name='customChoice' selected m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Pricebreakers
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          Save up to 60%
        </Text>
      </Box>
    </ChoiceChip>
    <ChoiceChip id='customChip3' name='customChoice' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </ChoiceChip>
    <ChoiceChip id='customChip4' name='customChoice' m={1} disabled>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </ChoiceChip>
    <ChoiceChip id='customChip5' name='customChoice' m={1} selected disabled>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </ChoiceChip>
  </Box>
)

// With Variation Shadow
export const WithVariationShadow = () => getExamples(chipWithShadowVariationArgs, [small, medium, responsive])

// Usage
export const Usage = () => {
  const ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE = 'round-trip-chip-button-id-outline'
  const ONE_WAY_CHIP_BUTTON_ID_OUTLINE = 'one-way-chip-button-id-outline'
  const ROUND_TRIP_CHIP_BUTTON_ID_SHADOW = 'round-trip-chip-button-id-shadow'
  const ONE_WAY_CHIP_BUTTON_ID_SHADOW = 'one-way-chip-button-id-shadow'
  const [chipState, setChipState] = useState({
    [`${ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE}`]: true,
    [`${ONE_WAY_CHIP_BUTTON_ID_OUTLINE}`]: false,
    [`${ROUND_TRIP_CHIP_BUTTON_ID_SHADOW}`]: true,
    [`${ONE_WAY_CHIP_BUTTON_ID_SHADOW}`]: false,
  })

  function handleClick(evt) {
    if (evt?.target?.id === ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE) {
      setChipState((state) => ({
        ...state,
        [`${ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE}`]: true,
        [`${ONE_WAY_CHIP_BUTTON_ID_OUTLINE}`]: false,
      }))
    }

    if (evt?.target?.id === ONE_WAY_CHIP_BUTTON_ID_OUTLINE) {
      setChipState((state) => ({
        ...state,
        [`${ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE}`]: false,
        [`${ONE_WAY_CHIP_BUTTON_ID_OUTLINE}`]: true,
      }))
    }

    if (evt?.target?.id === ROUND_TRIP_CHIP_BUTTON_ID_SHADOW) {
      setChipState((state) => ({
        ...state,
        [`${ROUND_TRIP_CHIP_BUTTON_ID_SHADOW}`]: true,
        [`${ONE_WAY_CHIP_BUTTON_ID_SHADOW}`]: false,
      }))
    }

    if (evt?.target?.id === ONE_WAY_CHIP_BUTTON_ID_SHADOW) {
      setChipState((state) => ({
        ...state,
        [`${ROUND_TRIP_CHIP_BUTTON_ID_SHADOW}`]: false,
        [`${ONE_WAY_CHIP_BUTTON_ID_SHADOW}`]: true,
      }))
    }
  }

  return (
    <Box m={3}>
      <Text>Varation: Outline</Text>
      <Flex flexDirection='row' key='outline'>
        <ChoiceChip
          id={ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE}
          selected={chipState[ROUND_TRIP_CHIP_BUTTON_ID_OUTLINE]}
          onClick={handleClick}
          label='Round-trip'
          m={1}
        />
        <ChoiceChip
          id={ONE_WAY_CHIP_BUTTON_ID_OUTLINE}
          selected={chipState[ONE_WAY_CHIP_BUTTON_ID_OUTLINE]}
          onClick={handleClick}
          label='One-way'
          m={1}
        />
      </Flex>
      <br />
      <Text>Varation: Shadow</Text>
      <Flex flexDirection='row' key='shadow'>
        <ChoiceChip
          id={ROUND_TRIP_CHIP_BUTTON_ID_SHADOW}
          selected={chipState[ROUND_TRIP_CHIP_BUTTON_ID_SHADOW]}
          onClick={handleClick}
          label='Round-trip'
          variation='shadow'
          m={1}
        />
        <ChoiceChip
          id={ONE_WAY_CHIP_BUTTON_ID_SHADOW}
          selected={chipState[ONE_WAY_CHIP_BUTTON_ID_SHADOW]}
          onClick={handleClick}
          label='One-way'
          variation='shadow'
          m={1}
        />
      </Flex>
    </Box>
  )
}

//Default
export default {
  title: 'core / Chip / ChoiceChip',
  component: ChoiceChip,
}
