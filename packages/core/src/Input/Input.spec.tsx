import React from 'react'
import { fireEvent, render, screen } from '../__test__/testing-library'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

import { Button, Input, theme, createTheme, getPaletteColor } from '..'

const id = 'fake-test-id'

describe('Input', () => {
  test('it renders', () => {
    const json = rendererCreateWithTheme(<Input id={id} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a red border with a color prop is passed', () => {
    const json = rendererCreateWithTheme(<Input id={id} color='red' />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with a really large padding and margin', () => {
    const json = rendererCreateWithTheme(<Input id={id} p={4} m={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('it renders an input element with large text', () => {
    const json = rendererCreateWithTheme(<Input id={id} fontSize={4} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('forwards ref to the input', () => {
    const target = 'TARGET'
    const placeholder = 'Apples'
    function refChild(dsRef) {
      function onClick() {
        dsRef.current.focus()
      }
      return (
        <>
          <Input id={id} ref={dsRef} placeholder={placeholder} />
          <Button onClick={onClick} mt={3}>
            {target}
          </Button>
        </>
      )
    }
    const { getByText, getByPlaceholderText } = render(<ForwardRefDemo refChild={refChild} />)
    fireEvent.click(getByText(target))
    expect(getByPlaceholderText(placeholder)).toHaveFocus()
  })

  test('it renders disabled', () => {
    const paletteTheme = createTheme(theme)
    render(<Input id={id} disabled placeholder='Disabled Input' />)

    const input = screen.getByPlaceholderText('Disabled Input')
    expect(input).toBeDisabled()
    expect(input).toHaveStyleRule(
      'background-color',
      getPaletteColor('background.light')({ theme: paletteTheme }),
      { modifier: ':disabled' }
    )
    expect(input).toHaveStyleRule('color', getPaletteColor('text.light')({ theme: paletteTheme }), {
      modifier: ':disabled',
    })
    expect(input).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
  })

  describe('helper text', function () {
    test('renders with same color as Input', () => {
      const helperText = 'hello world'
      const color = 'error.base'
      const paletteTheme = createTheme(theme)
      const { getByText } = render(
        <Input id={id} color={color} helperText={<Input.HelperText>{helperText}</Input.HelperText>} />
      )
      const helperTextNode = getByText(helperText)
      expect(helperTextNode).not.toBeNull()
      expect(helperTextNode).toHaveStyleRule('color', getPaletteColor(color)({ theme: paletteTheme }))
    })

    test('can override the color from Input', () => {
      const helperText = 'hello world'
      const placeholder = 'click me'
      const color = 'error.base'
      const helperTextColor = 'secondary.base'
      const paletteTheme = createTheme(theme)
      const { getByText, getByPlaceholderText } = render(
        <Input
          id={id}
          color={color}
          placeholder={placeholder}
          helperText={<Input.HelperText color={helperTextColor}>{helperText}</Input.HelperText>}
        />
      )
      const helperTextNode = getByText(helperText)
      expect(helperTextNode).not.toBeNull()
      expect(helperTextNode).toHaveStyleRule(
        'color',
        getPaletteColor(helperTextColor)({ theme: paletteTheme })
      )
      expect(getByPlaceholderText(placeholder)).toHaveStyleRule(
        'border-color',
        getPaletteColor(color)({ theme: paletteTheme })
      )
    })
  })
})
