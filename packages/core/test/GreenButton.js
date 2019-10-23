import React from 'react'
import styled from 'styled-components'
import { GreenButton, theme } from '../src'

describe('GreenButton', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<GreenButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = rendererCreateWithTheme(<GreenButton disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', '#ecf7ec')
  })

  test('without disabled prop sets', () => {
    const json = rendererCreateWithTheme(<GreenButton />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkGreen, {
      modifier: ':hover'
    })
  })

  test('renders with nested style', () => {
    const Component = styled.div`
      ${GreenButton} {
        color: red;
      }
    `
    const wrapper = rendererCreateWithTheme(
      <Component>
        <GreenButton />
      </Component>
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
