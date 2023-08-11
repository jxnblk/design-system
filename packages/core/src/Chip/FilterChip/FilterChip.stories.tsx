import React, { useState } from 'react'
import { Departure } from 'pcln-icons'
import FilterChip from './FilterChip'
import { Box } from '../../Box'
import { Text } from '../../Text'
import { chipWithShadowVariationArgs } from '../../storybook/args'

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
            <FilterChip
              key={`chip${size.title}${i}`}
              id={`chip${size.title}${i}`}
              name={`chip${size.title}_${i}`}
              m={1}
              size={size.value}
              value={size.title}
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
  { label: 'Active', selected: true, showActionIcon: true },
  { label: 'Disabled', disabled: true, showActionIcon: true },
  { label: 'Active and Disabled', selected: true, showActionIcon: true, disabled: true },
]
export const LabelOnly = () => getExamples(labelOnly, [small, medium, responsive])

//With Icon
const withIcon = [
  { label: 'Enabled', Icon: Departure },
  { label: 'Active', selected: true, Icon: Departure },
  { label: 'Active', selected: true, showActionIcon: true, Icon: Departure },
  {
    label: 'Disabled',
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
  },
  {
    label: 'Active and Disabled',
    selected: true,
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
  },
]
export const WithIcon = () => getExamples(withIcon, [small, medium, responsive])

//With Facet
const withFacet = [
  { label: 'Enabled', facet: '(00)' },
  { label: 'Active', facet: '(00)', selected: true },
  { label: 'Active', facet: '(00)', selected: true, showActionIcon: true },
  {
    label: 'Disabled',
    facet: '(00)',
    showActionIcon: true,
    disabled: true,
  },
  {
    label: 'Active and Disabled',
    facet: '(00)',
    selected: true,
    showActionIcon: true,
    disabled: true,
  },
]
export const WithFacet = () => getExamples(withFacet, [small, medium, responsive])

//With Facet And Icon
const withFacetAndIcon = [
  { label: 'Enabled', facet: '(00)', Icon: Departure },
  { label: 'Active', facet: '(00)', Icon: Departure, selected: true },
  {
    label: 'Active',
    facet: '(00)',
    Icon: Departure,
    selected: true,
    showActionIcon: true,
  },
  {
    label: 'Disabled',
    facet: '(00)',
    Icon: Departure,
    showActionIcon: true,
    disabled: true,
  },
  {
    label: 'Active and Disabled',
    facet: '(00)',
    Icon: Departure,
    selected: true,
    showActionIcon: true,
    disabled: true,
  },
]
export const WithIconAndFacet = () => getExamples(withFacetAndIcon, [small, medium, responsive])

//Icon Only
const iconOnly = [
  { Icon: Departure, title: 'Departure' },
  { Icon: Departure, title: 'Departure' },
  { selected: true, showActionIcon: true, Icon: Departure, title: 'Departure' },
  {
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
    title: 'Departure',
  },
  {
    selected: true,
    showActionIcon: true,
    disabled: true,
    Icon: Departure,
    title: 'Departure',
  },
]
export const IconOnly = () => getExamples(iconOnly, [small, medium, responsive])

//With Image
const withImage = [
  { label: 'Enabled', image: image },
  { label: 'Active', selected: true, image: image },
  { label: 'Active', selected: true, showActionIcon: true, image: image },
  {
    label: 'Disabled',
    showActionIcon: true,
    disabled: true,
    image: image,
  },
  {
    label: 'Active and Disabled',
    selected: true,
    showActionIcon: true,
    disabled: true,
    image: image,
  },
]
export const WithImage = () => getExamples(withImage, [medium])

//With Image And Bridge Label
const withImageAndBridgeLabel = [
  { label: 'Enabled', image: image, bridgeLabel: 'Bridge' },
  { label: 'Active', selected: true, image: image, bridgeLabel: 'Bridge' },
  {
    label: 'Active',
    selected: true,
    showActionIcon: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
  {
    label: 'Disabled',
    showActionIcon: true,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
  {
    label: 'Active and Disabled',
    selected: true,
    showActionIcon: true,
    disabled: true,
    image: image,
    bridgeLabel: 'Bridge',
  },
]
export const WithImageAndBridgeLabel = () => getExamples(withImageAndBridgeLabel, [medium])

//Image Only
const imageOnly = [
  { image: image },
  { selected: true, image: image },
  { selected: true, showActionIcon: true, image: image },
  { showActionIcon: true, disabled: true, image: image },
  { selected: true, showActionIcon: true, disabled: true, image: image },
]
export const ImageOnly = () => getExamples(imageOnly, [medium])

//Custom Chip
export const CustomChip = () => (
  <Box m={2}>
    <FilterChip id='customChip1' name='customFilterChipName1' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Browse All
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          $161 avg. per night
        </Text>
      </Box>
    </FilterChip>
    <FilterChip id='customChip2' name='customFilterChipName2' selected m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Pricebreakers
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          Save up to 60%
        </Text>
      </Box>
    </FilterChip>
    <FilterChip id='customChip3' name='customFilterChipName3' m={1}>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </FilterChip>
    <FilterChip id='customChip4' name='customFilterChipName3' m={1} disabled>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </FilterChip>
    <FilterChip id='customChip5' name='customFilterChipName3' m={1} disabled selected>
      <Box px={3} py={1}>
        <Text textAlign='center' bold fontSize={1}>
          Express Deals
        </Text>
        <Text textAlign='center' regular fontSize={0}>
          <Text.span color='green'>$130</Text.span> avg. per night
        </Text>
      </Box>
    </FilterChip>
  </Box>
)

// Toggle Chip
export const ToggleChip = () => {
  const [toggle, setToggle] = useState(false)
  const label = toggle ? 'Unselect' : 'Select'
  return (
    <FilterChip
      label={label}
      selected={toggle}
      onClick={() => {
        setToggle(!toggle)
      }}
    />
  )
}

// With Variation Shadow
export const WithVariationShadow = () => getExamples(chipWithShadowVariationArgs, [small, medium, responsive])

// Usage
export const Usage = () => {
  const FREE_CANCELLATION_CHIP_BUTTON_ID_OUTLINE = 'free-cancellation-chip-button-id-outline'
  const FREE_WIFI_CHIP_BUTTON_ID_OUTLINE = 'free-wifi-chip-button-id-outline'
  const FREE_PARKING_CHIP_BUTTON_ID_OUTLINE = 'free-parking-chip-button-id-outline'
  const FREE_CANCELLATION_CHIP_BUTTON_ID_SHADOW = 'free-cancellation-chip-button-id-shadow'
  const FREE_WIFI_CHIP_BUTTON_ID_SHADOW = 'free-wifi-chip-button-id-shadow'
  const FREE_PARKING_CHIP_BUTTON_ID_SHADOW = 'free-parking-chip-button-id-shadow'
  const [chipState, setChipState] = useState({
    [`${FREE_CANCELLATION_CHIP_BUTTON_ID_OUTLINE}`]: false,
    [`${FREE_WIFI_CHIP_BUTTON_ID_OUTLINE}`]: false,
    [`${FREE_PARKING_CHIP_BUTTON_ID_OUTLINE}`]: false,
    [`${FREE_CANCELLATION_CHIP_BUTTON_ID_SHADOW}`]: false,
    [`${FREE_WIFI_CHIP_BUTTON_ID_SHADOW}`]: false,
    [`${FREE_PARKING_CHIP_BUTTON_ID_SHADOW}`]: false,
  })

  function handleClick(evt) {
    if (evt?.target?.id) {
      const chipButtonId = evt.target.id
      setChipState((state) => ({ ...state, [chipButtonId]: !state[chipButtonId] }))
    }
  }

  return (
    <Box m={3}>
      <Text>Varation: Outline</Text>
      <Box flexDirection='row' key='outline'>
        <FilterChip
          id={FREE_CANCELLATION_CHIP_BUTTON_ID_OUTLINE}
          selected={chipState[FREE_CANCELLATION_CHIP_BUTTON_ID_OUTLINE]}
          onClick={handleClick}
          label='Free Cancellation'
          showActionIcon={chipState[FREE_CANCELLATION_CHIP_BUTTON_ID_OUTLINE]}
          m={1}
        />
        <FilterChip
          id={FREE_WIFI_CHIP_BUTTON_ID_OUTLINE}
          selected={chipState[FREE_WIFI_CHIP_BUTTON_ID_OUTLINE]}
          onClick={handleClick}
          label='Free WiFi'
          showActionIcon={chipState[FREE_WIFI_CHIP_BUTTON_ID_OUTLINE]}
          m={1}
        />
        <FilterChip
          id={FREE_PARKING_CHIP_BUTTON_ID_OUTLINE}
          selected={chipState[FREE_PARKING_CHIP_BUTTON_ID_OUTLINE]}
          onClick={handleClick}
          label='Free Parking'
          showActionIcon={chipState[FREE_PARKING_CHIP_BUTTON_ID_OUTLINE]}
          m={1}
        />
      </Box>
      <br />
      <Text>Varation: Shadow</Text>
      <Box flexDirection='row' key='shadow'>
        <FilterChip
          id={FREE_CANCELLATION_CHIP_BUTTON_ID_SHADOW}
          selected={chipState[FREE_CANCELLATION_CHIP_BUTTON_ID_SHADOW]}
          onClick={handleClick}
          label='Free Cancellation'
          variation='shadow'
          showActionIcon={chipState[FREE_CANCELLATION_CHIP_BUTTON_ID_SHADOW]}
          m={1}
        />
        <FilterChip
          id={FREE_WIFI_CHIP_BUTTON_ID_SHADOW}
          selected={chipState[FREE_WIFI_CHIP_BUTTON_ID_SHADOW]}
          onClick={handleClick}
          label='Free WiFi'
          variation='shadow'
          showActionIcon={chipState[FREE_WIFI_CHIP_BUTTON_ID_SHADOW]}
          m={1}
        />
        <FilterChip
          id={FREE_PARKING_CHIP_BUTTON_ID_SHADOW}
          selected={chipState[FREE_PARKING_CHIP_BUTTON_ID_SHADOW]}
          onClick={handleClick}
          label='Free Parking'
          variation='shadow'
          showActionIcon={chipState[FREE_PARKING_CHIP_BUTTON_ID_SHADOW]}
          m={1}
        />
      </Box>
    </Box>
  )
}

//Default
export default {
  title: 'core / Chip / FilterChip',
  component: FilterChip,
}
