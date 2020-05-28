import React from 'react'

import { Flag } from '..'

describe('Flag', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Flag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = rendererCreateWithTheme(<Flag width={256} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with hex value as bg color', () => {
    const json = rendererCreateWithTheme(
      <Flag width={256} bg='#085397' />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with theme color as bg color', () => {
    const json = rendererCreateWithTheme(
      <Flag width={256} bg='purple' />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
