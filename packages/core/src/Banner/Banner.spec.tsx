import React from 'react'
import { render } from '@priceline/react-jesting-library'

import { Banner, Text, Heading, theme } from '..'

describe('Banner', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders with no props other than theme', () => {
    const json = rendererCreateWithTheme(<Banner />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with custom iconName and size', () => {
    const json = rendererCreateWithTheme(<Banner iconName='star' iconSize={20} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const json = rendererCreateWithTheme(
      <Banner header='Header' text='Text' iconName='star' iconSize={20} theme={theme} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const json = rendererCreateWithTheme(
      <Banner header='Header' text={<Text>Text</Text>} iconName='star' iconSize={20} theme={theme} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with blue bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with green bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='green' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with orange bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='orange' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with red bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='red' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with lightBlue bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='lightBlue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('renders with lightGreen bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='lightGreen' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('renders with lightRed bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='lightRed' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('renders close button if onClose func is provided', () => {
    function noop() {}
    const { container } = render(<Banner onClose={noop} />)
    const closeButton = container.querySelector('button')
    expect(closeButton).toBeTruthy()
  })

  test('does render blue left-hand icon by default', () => {
    const { container } = render(<Banner bg='blue' />)
    const icon = container.querySelector('svg')
    // todo: check svg path/attrs for correct icon
    expect(icon).toBeTruthy()
  })

  test('does not render blue left-hand icon if showIcon is false', () => {
    const { container } = render(<Banner bg='blue' showIcon={false} />)
    const icon = container.querySelector('svg')
    expect(icon).toBeFalsy()
  })

  test('accepts non-preset colors', () => {
    const json = rendererCreateWithTheme(<Banner bg='gray' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.gray)
  })

  test('renders content from children props', () => {
    const json = rendererCreateWithTheme(
      <Banner>
        <span>123</span>
      </Banner>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with header node', () => {
    const { asFragment, getByText } = render(
      <Banner
        header={<Heading>Hello world</Heading>}
        text={<Text>Text</Text>}
        iconName='star'
        iconSize={20}
        theme={theme}
      />
    )

    getByText(/Hello world/)
    expect(asFragment()).toMatchSnapshot()
  })
})
