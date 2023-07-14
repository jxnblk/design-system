import React from 'react'
import { ThumbsUp } from 'pcln-icons'

import { Hug, Text, Card } from '..'

const text = (
  <Text.span>
    Have you seen this <Text.span bold>card</Text.span> I‘m hugging?!
  </Text.span>
)

describe('Hug', () => {
  test('renders text, icon, and Child', () => {
    const json = rendererCreateWithTheme(
      <Hug icon={<ThumbsUp />} text={text}>
        <Card p={3} bg='white' color='text'>
          I‘m a card within a hug!
        </Card>
      </Hug>
    ).toJSON
    expect(json).toMatchSnapshot()
  })

  test('renders text when string is provided', () => {
    const json = rendererCreateWithTheme(
      <Hug icon={<ThumbsUp />} text="I've been known to hug a card from time to time">
        <Card p={3} bg='white' color='text'>
          I‘m a card within a hug!
        </Card>
      </Hug>
    ).toJSON
    expect(json).toMatchSnapshot()
  })

  test('renders text when array of nodes is provided', () => {
    const json = rendererCreateWithTheme(
      <Hug icon={<ThumbsUp />} text={[text, text]}>
        <Card p={3} bg='white' color='text'>
          I‘m a card within a hug!
        </Card>
      </Hug>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
})
