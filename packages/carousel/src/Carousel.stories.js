import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Card, Container, Image, Text, Box, BackgroundImage } from 'pcln-design-system'
import styled from 'styled-components'
import { Carousel, ArrowButton } from '.'

const SLIDE_COUNT = 10

const ToutCard = styled(Card)`
  overflow: hidden;
`

const StyledMockBox = styled(Box)`
  border: 1px solid black;
`

export default {
  title: 'pcln-carousel / Carousel',
  component: Carousel,
  argTypes: {
    visibleSlides: {
      control: { type: 'number' },
      min: 1,
      max: SLIDE_COUNT,
    },
    naturalSlideHeight: {
      control: { type: 'number' },
      min: 1,
    },
    showDots: {
      control: { type: 'boolean' },
    },
    showForwardBackBtns: {
      control: { type: 'boolean' },
    },
    children: {
      table: { disable: true },
    },
    infinite: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    orientation: {
      control: { type: 'radio' },
      defaultValue: 'horizontal',
    },
    isIntrinsicHeight: {
      defaultValue: true,
    },
    onSlideChange: {
      action: 'Current slide changed',
    },
  },
}

function renderCards() {
  return Array.from(Array(SLIDE_COUNT), (_, idx) => (
    <ToutCard height={idx === 1 ? '300px' : '320px'} borderRadius={20} boxShadowSize='md' borderWidth={0}>
      <BackgroundImage height='190px' width='100%' image='https://cdn2.thecatapi.com/images/dnn.jpg' />
      <Flex color='background.lightest' p={[1, 1, 2, 2, 2, 3]}>
        <Box>
          <Text fontSize={[0, null, 1, 1, 2]} fontWeight='bold' mb={2}>
            City {idx}, AB
          </Text>
          <Text fontSize={[0, null, null, null, 1]}>Hotel for 2 nights</Text>
          <Text fontSize={[0, null, null, null, 1]}>+ Round-trip flight</Text>
        </Box>
        <Text textAlign='right' ml='auto'>
          <Text.s fontSize={[0, null, null, null, 1]} fontWeight='bold'>
            $554
          </Text.s>
          <Text fontSize={[0, null, 1, 1, 3]} fontWeight='bold' color='secondary.base' mx={1}>
            $365
          </Text>
          <Text fontSize={[0, null, null, null, 1]} color='text.light'>
            per person
          </Text>
        </Text>
      </Flex>
    </ToutCard>
  ))
}

const BasicTemplate = (args) => <Carousel {...args}>{renderCards()}</Carousel>

export const Basic = BasicTemplate.bind({})
Basic.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  arrowPositions: 'bottom',
}

const VerticalTemplate = (args) => (
  <Flex width='300px' height='500px'>
    <Carousel {...args}>
      {Array.from(Array(SLIDE_COUNT), (_, idx) => (
        <Flex justifyContent='center' alignItems='center'>
          <Card color='primary.light' border='primary' key={idx} height='200px' width='200px' p={3}>
            Slide {idx}
          </Card>
        </Flex>
      ))}
    </Carousel>
  </Flex>
)

export const Vertical = VerticalTemplate.bind({})
Vertical.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  orientation: 'vertical',
  isIntrinsicHeight: false,
  naturalSlideHeight: 100,
}

const LayoutTemplate = (args) => (
  <Carousel {...args}>
    {Array.from(Array(6), (_, idx) => (
      <Card color='primary.light' height='100px' key={idx}>
        Slide {idx}
      </Card>
    ))}
  </Carousel>
)

export const Layout = LayoutTemplate.bind({})
Layout.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  layout: '25-50-25',
}

const TextSlide = ({ text, bold }) => {
  return (
    <Card height='100%' mx={2}>
      <Flex justifyContent='center' alignItems='center' height='100%'>
        <Text bold={bold}>{text}</Text>
      </Flex>
    </Card>
  )
}
TextSlide.propTypes = {
  bold: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

const RichContentTemplate = (args) => (
  <Carousel {...args}>
    <Card>
      <Text textAlign='center' bold mt={2}>
        Welcome to Priceline!
      </Text>
      <Flex justifyContent='center'>
        <Image src='https://cdn2.thecatapi.com/images/dnn.jpg' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/70f.jpg' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/a18.png' p={3} height='150px' />
        <Image src='https://cdn2.thecatapi.com/images/fSJGVIdLBK.jpg' p={3} height='150px' />
      </Flex>
    </Card>
    <TextSlide text='Best' />
    <TextSlide text='travel' />
    <TextSlide text='deal' />
    <TextSlide text='makers' />
    <TextSlide text='in' />
    <TextSlide text='the' />
    <TextSlide text='world!' />
  </Carousel>
)

export const RichContent = RichContentTemplate.bind({})
RichContent.args = {
  showDots: false,
  showForwardBackBtns: true,
  layout: '75-25',
}

const ButtonColorsTemplate = (args) => <Carousel {...args}>{renderCards()}</Carousel>

const buttonStyles = {
  buttonBackground: 'primary.base',
  buttonColor: 'text.lightest',
  buttonHoverBackground: 'primary.dark',
  buttonHoverColor: 'text.lightest',
}

export const AlternateButtonColors = ButtonColorsTemplate.bind({})
AlternateButtonColors.args = {
  visibleSlides: 3,
  showDots: false,
  showForwardBackBtns: true,
  sidePositionArrowButton: <ArrowButton {...buttonStyles} />,
}

const FixedVisibleSlidesTemplate = (args) => (
  <Container maxWidth={1280}>
    <Flex width={1} flexDirection={['column', null, null, 'row']}>
      <Box width={[1, null, null, 2 / 3]}>
        <Carousel {...args}>{renderCards()}</Carousel>
      </Box>
      <StyledMockBox width={[1, null, null, 1 / 3]} textAlign='center'>
        MOCK SUMMARY OF CHARGES
      </StyledMockBox>
    </Flex>
  </Container>
)
export const SetVisibleSlidesByViewport = FixedVisibleSlidesTemplate.bind({})

SetVisibleSlidesByViewport.args = {
  showDots: false,
  showForwardBackBtns: true,
  visibleSlides: [2.1, 1, 1],
  sideButtonMargin: '-23px',
  sidePositionArrowButton: <ArrowButton {...buttonStyles} buttonSize='48px' />,
}
