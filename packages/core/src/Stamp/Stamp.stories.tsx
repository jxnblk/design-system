import React from 'react'
import styled from 'styled-components'

import { Stamp, Text } from '..'
import type { ColorSchemes as ColorSchemesType } from '..'
import { argTypes } from './Stamp.stories.args'
import { Pin as PinIcon, Airplane } from 'pcln-icons'

// for Args
// const sizes = { small: 'small', medium: 'medium' }
// const variations = { outline: 'outline', fill: 'fill' }
// const colors = {
//   primary: 'primary',
//   secondary: 'secondary',
//   text: 'text',
//   success: 'success',
//   error: 'error',
//   warning: 'warning',
//   alert: 'alert',
//   caution: 'caution',
//   notify: 'notify',
//   pricePrimary: 'pricePrimary',
//   priceSecondary: 'priceSecondary',
//   promoPrimary: 'promoPrimary',
//   promoSecondary: 'promoSecondary',
//   border: 'border',
//   background: 'background',
// }

const BlueStamp = styled(Stamp).attrs(() => ({
  borderColor: 'primary',
  bg: 'primary',
  color: 'background.lightest',
  mr: 2,
}))``

export default {
  title: 'Stamp',
  component: Stamp,
  parameters: {
    docs: {
      description: {
        component:
          'Use the <Stamp /> component to subtly display attributes alongside listing cells and on product detail pages. Use it in conjunction with a named `pcln-icons` icon component to give it more context. An icon placed within a Stamp will inherit the assigned Stamp color.',
      },
    },
  },
  argTypes,
}

const Template = (args) => <Stamp {...args}>text here</Stamp>

export const StampComponent = Template.bind({})
StampComponent.args = { color: 'primary' }

export const CustomBackgroundAndBorderColor = () => (
  <div>
    <Stamp color='background.lightest' bg='primary' borderColor='primary' mr={2}>
      custom border and background
    </Stamp>
    <Stamp color='error' bg='background.lightest' borderColor='primary' mr={2}>
      custom border and background
    </Stamp>
  </div>
)

CustomBackgroundAndBorderColor.story = {
  name: 'Custom Background and Border Color',
}

export const CustomTextSize = () => (
  <div>
    <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
      <Text fontSize={0}>Yorkie</Text>
    </Stamp>
    <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
      <Text fontSize={1}>Jack Russell</Text>
    </Stamp>
    <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
      <Text fontSize={2}>Golden Retriever</Text>
    </Stamp>
    <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
      <Text fontSize={3}>Doberman</Text>
    </Stamp>
    <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
      <Text fontSize={4}>Malamute</Text>
    </Stamp>
  </div>
)

export const PassAnArrayOfSizes = () => (
  <div>
    <BlueStamp size={['medium', null, null, null, null, null]}>
      <PinIcon pr={1} />
      <Text>Larger at xs</Text>
    </BlueStamp>
    <BlueStamp size={['small', 'medium', null, null, null, null]}>
      <PinIcon pr={1} />
      <Text>Larger at sm</Text>
    </BlueStamp>
    <BlueStamp size={['small', null, 'medium', null, null, null]}>
      <PinIcon pr={1} />
      <Text>Larger at md</Text>
    </BlueStamp>
    <BlueStamp size={['small', 'small', null, 'medium', null, null]}>
      <PinIcon pr={1} />
      <Text>Larger at lg</Text>
    </BlueStamp>
    <BlueStamp size={['small', null, null, null, 'medium', null]}>
      <PinIcon pr={1} />
      <Text>Larger at xl</Text>
    </BlueStamp>
    <BlueStamp size={['small', null, null, null, null, 'medium']}>
      <PinIcon pr={1} />
      <Text>Larger at xxl</Text>
    </BlueStamp>
  </div>
)

PassAnArrayOfSizes.story = {
  name: 'Pass an array of sizes',
}

const ColorSchemesTemplate = () => {
  return (
    <React.Fragment>
      {['primary', 'primaryLight', 'primaryLightest', 'promoLight'].map((colorScheme) => (
        <Stamp m={3} colorScheme={colorScheme as keyof ColorSchemesType} key={colorScheme}>
          <Airplane mr={2} />
          {colorScheme}
        </Stamp>
      ))}
    </React.Fragment>
  )
}
export const ColorSchemes = ColorSchemesTemplate.bind({})
ColorSchemesTemplate.args = {}
