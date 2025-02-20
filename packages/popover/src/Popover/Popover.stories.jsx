/* eslint-disable react/prop-types */
import {
  Absolute,
  BackgroundImage,
  Box,
  Button,
  CloseButton,
  Dialog,
  FilterChip,
  Flex,
  IconButton,
  Link,
  Text,
  ThemeProvider,
} from 'pcln-design-system'
import { Close } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import Popover from './Popover'
import { argTypes, defaultArgs } from './Popover.stories.args'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: 'pcln-popover / Popover',
  component: Popover,
  args: defaultArgs,
  argTypes: argTypes,
}

const AbsolutePosBtn = styled(IconButton)`
  top: 20px;
  right: 20px;
  position: absolute;
`

const Template = ({ children, ...args }) => (
  <Flex justifyContent='center' alignItems='center' width={1} my={6}>
    <Popover
      renderContent={({ handleClose }) => (
        <Flex flexDirection='column' p={2} onClick={(e) => e.stopPropagation()}>
          <Text fontSize={1} mb={1} mt={0} fontWeight='bold'>
            Tip:
          </Text>
          <Text mt={0} mb={1}>
            Use arrow keys to navigate the calendar
          </Text>
          <AbsolutePosBtn onClick={handleClose} title='Close tooltip' icon={<Close />} />
        </Flex>
      )}
      ariaLabel='Calendar navigation tooltip'
      overlayOpacity={0.3}
      width={350}
      borderColor='border.base'
      trapFocus
      zIndex={2000}
      idx='date-picker-footer'
      {...args}
    >
      {children}
    </Popover>
  </Flex>
)

export const _Popover = Template.bind({})

export const colors = () => (
  <Flex m={200}>
    <Popover
      color='primary'
      renderContent={SimpleTextContent}
      placement='left'
      ariaLabel='Default Popover'
      width={130}
    >
      <Button color='primary' mx={2}>
        Default Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='top'
      ariaLabel='Success Popover'
      width={130}
      color='success'
    >
      <Button color='success' mx={2}>
        Success Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='bottom'
      ariaLabel='Alert Popover'
      width={130}
      color='alert'
    >
      <Button color='alert' mx={2}>
        Alert Popover
      </Button>
    </Popover>
    <Popover
      renderContent={SimpleTextContent}
      placement='right'
      ariaLabel='Error Popover'
      width={130}
      color='error'
    >
      <Button color='error' mx={2}>
        Error Popover
      </Button>
    </Popover>
  </Flex>
)

const FilterChipContent = ({ handleClose }) => (
  <Box p={3}>
    <Flex justifyContent='center' mb={3}>
      <FilterChip label='Filter Chip' size='sm' mr={2} />
      <FilterChip label='Filter Chip' size='sm' />
    </Flex>
    <Flex justifyContent='right'>
      <Button size='small' onClick={handleClose}>
        Done
      </Button>
    </Flex>
  </Box>
)

export const filterChips = () => (
  <Popover renderContent={FilterChipContent} placement='bottom' ariaLabel='Default Popover' width={300}>
    <Button color='primary'>Popover with Filter Chips</Button>
  </Popover>
)

export const bottom = () => (
  <Popover renderContent={InnerContent} placement='bottom' ariaLabel='Bottom Popover' idx={2} width={400}>
    <Link m={3}>Open Popover</Link>
  </Popover>
)

export const InDialog = () => (
  <Dialog triggerNode={<Button>Open Dialog</Button>} size='md' zIndex={0}>
    <Box height={300}>
      <Popover renderContent={InnerContent} placement='bottom' ariaLabel='Dialog Popover' idx={2} width={400}>
        <Button m={3}>Open Popover</Button>
      </Popover>
    </Box>
  </Dialog>
)

export const hideOverlay = () => (
  <Popover
    renderContent={InnerContent}
    placement='bottom'
    ariaLabel='Bottom Popover'
    hideOverlay
    idx={2}
    width={400}
  >
    <Link m={3}>Open Popover</Link>
  </Popover>
)

export const rightWithOverlayOnScrollPosition = () => (
  <Flex flexDirection='column'>
    <Text mb='2000px'>Scroll down, popover trigger is at the end</Text>
    <Box>
      <Popover
        renderContent={InnerContent}
        placement='top-start'
        ariaLabel='Test Popover'
        idx={1}
        width={400}
        overlayOpacity={0.3}
        color='error.light'
        borderColor='error.dark'
      >
        <Button>Popover</Button>
      </Popover>
    </Box>
  </Flex>
)

export const hideArrow = () => (
  <Popover
    renderContent={SimpleTextContent}
    placement='bottom'
    ariaLabel='Test Popover'
    idx={1}
    width={150}
    hideArrow
    isOpen
  >
    <Button>Popover</Button>
  </Popover>
)

const SimpleTextContent = () => (
  <Box p={2}>
    <Text textAlign='center'>Hello world!</Text>
  </Box>
)

const LongTextContent = () => (
  <Box p={2}>
    <Text textStyle='heading2'> Disable Floating: </Text>
    <Text textStyle='heading5'>
      {' '}
      When the prop disableFloating is set to true, the popover will not float on the screen. Resize your
      window/view-port to see the effect.{' '}
    </Text>
    <Text textAlign='center'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </Text>
  </Box>
)

const InnerContent = ({ handleClose }) => (
  <Box p={4}>
    <Absolute top={15} right={15}>
      <CloseButton onClick={handleClose} />
    </Absolute>
    <BackgroundImage
      width='100%'
      height='100px'
      image='https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=aee8a50c86478d935556d865624506e4'
    />
    <Text theme pb={3} pt={3} fontSize={16} textAlign='center' bold>
      Do you accept the terms and conditions?
    </Text>
    <Flex justifyContent='center'>
      <Button color='primary' onClick={handleClose} mr={2}>
        Agree
      </Button>
      <Button variation='subtle' onClick={handleClose} ml={2}>
        Close
      </Button>
    </Flex>
  </Box>
)

export const PassesThemeToContent = () => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            base: 'red',
          },
        },
      }}
    >
      <Popover
        renderContent={InnerContent}
        placement='bottom'
        ariaLabel='Bottom Popover'
        idx={2}
        width={400}
        borderColor='border.base'
      >
        <Text color={'primary.base'}>hello world</Text>
      </Popover>
    </ThemeProvider>
  )
}

export const PopoverInteractionTest = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const text = canvas.getByText('Popover interaction test')
    expect(text).toBeInTheDocument()
    await userEvent.hover(text)
    expect(args.onOpen).toHaveBeenCalled()
    await userEvent.unhover(text)
    expect(args.onClose).toHaveBeenCalled()
  },
  render: (args) => (
    <Flex m={200}>
      <Popover
        color='primary'
        renderContent={SimpleTextContent}
        placement='left'
        ariaLabel='Default Popover'
        width={130}
        {...args}
      >
        <Text color='primary' mx={2}>
          Popover interaction test
        </Text>
      </Popover>
    </Flex>
  ),
}

const OpenAndCloseTemplate = (args) => (
  <Popover
    {...args}
    openOnHover={false}
    renderContent={({ handleClose }) => (
      <Box p={2}>
        <p>Hello there!</p>
        <Button onClick={handleClose}>Click me to close!</Button>
      </Box>
    )}
  >
    <Button>Open popover</Button>
  </Popover>
)

const OpenAndCloseTemplate2 = (args) => (
  <>
    <div id='popover-portal'>Should render here</div>
    <Popover
      querySelectorPortal='#popover-portal'
      {...args}
      openOnHover={false}
      renderContent={({ handleClose }) => (
        <Box p={2}>
          <p>Hello there!</p>
          <Button onClick={handleClose}>Click me to close!</Button>
        </Box>
      )}
    >
      <Button>Open popover</Button>
    </Popover>
  </>
)

export const OpensOnClick = {
  name: 'Tests / Opens on click',
  render: OpenAndCloseTemplate.bind({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const triggerBtn = canvas.getByText('Open popover')
    expect(triggerBtn).toBeInTheDocument()
    await userEvent.click(triggerBtn)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  },
}

export const RendersOnSpecificArea = {
  name: 'Renders on specific area',
  render: OpenAndCloseTemplate2.bind({}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const triggerBtn = canvas.getByText('Open popover')
    expect(triggerBtn).toBeInTheDocument()
    await userEvent.click(triggerBtn)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  },
}

export const DisableFloating = (args) => (
  <Flex flexDirection='row' justifyContent='space-between'>
    <Flex m={200}>
      <Popover
        {...args}
        disableFloating={false}
        isOpen
        color='primary'
        openOnHover={false}
        renderContent={LongTextContent}
        placement='bottom'
        ariaLabel='Default Popover'
        width={330}
      >
        <Button color='primary' mx={2}>
          Open popover (disableFloating=false )
        </Button>
      </Popover>
    </Flex>
    <Flex m={200}>
      <Popover
        {...args}
        isOpen
        disableFloating
        color='primary'
        openOnHover={false}
        renderContent={LongTextContent}
        placement='bottom'
        ariaLabel='Default Popover'
        width={330}
      >
        <Button color='primary' mx={2}>
          Open popover (disableFloating=true)
        </Button>
      </Popover>
    </Flex>
    <Flex m={200}>
      <Popover
        {...args}
        isOpen
        color='secondary'
        openOnHover={false}
        renderContent={LongTextContent}
        placement='bottom'
        ariaLabel='Default Popover'
        width={330}
      >
        <Button color='secondary' mx={2}>
          Open popover (disableFloating using storybook control)
        </Button>
      </Popover>
    </Flex>
  </Flex>
)

const ControlledTemplate = ({ isOpen, handleOpen, handleClose, ...args }) => (
  <>
    <div>
      Below is a button that you can't open by clicking. Instead you must use the controls tab at the bottom
      to modify the <strong>isOpen</strong> prop. If you do it, an unbelievable fact will be revealed.
    </div>
    <Popover
      {...args}
      isOpen={isOpen}
      renderContent={({}) => (
        <Box p={2}>
          {`Tardigrades can survive in the vacuum of space, endure extreme temperatures from just above absolute zero to over 300 degrees Fahrenheit, withstand high levels of radiation, and go without water for decades by entering a state called cryptobiosis. When conditions improve, they can rehydrate and return to their normal functioning state.`}
        </Box>
      )}
    >
      <Button>Tee Hee</Button>
    </Popover>
  </>
)

export const OpensAndClosesProgrammatically = {
  name: 'Tests / Opens and closes programmatically',
  render: ControlledTemplate.bind({}),
  args: {
    isOpen: false,
    openOnHover: false,
    toggleIsOpenOnClick: false,
  },
}
