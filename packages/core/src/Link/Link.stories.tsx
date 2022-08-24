import React from 'react'

import { Button, Link, Text } from '..'
import ForwardRefDemo from '../storybook/utils/ForwardRefsDemo'

// for Args
// const variations = { link: 'link', fill: 'fill', outline: 'outline' }
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

export default {
  title: 'Link',
  component: Link,
}

export const LinkComponent = () => (
  <Link href='https://www.priceline.com/home/' target='_blank'>
    Priceline Home
  </Link>
)

LinkComponent.story = {
  name: 'Link component',
}

export const AsSmallFilledButton = () => (
  <>
    <Link variation='fill' href='https://www.priceline.com/home/' target='_blank'>
      Priceline Home
    </Link>
  </>
)

export const LinkOpenSelf = () => (
  <Link href='https://www.priceline.com/home/' target='_self'>
    Open the Priceline Home in the same window
  </Link>
)

LinkOpenSelf.story = {
  name: 'Link open self',
}

export function ForwardRefs() {
  function refChild(dsRef) {
    function onClick() {
      return (dsRef.current.innerHTML = 'Bacon!')
    }
    return (
      <>
        <Link color='text.dark' ref={dsRef}>
          I am a link!
        </Link>
        <br />
        <Button color='error' onClick={onClick} mt={4}>
          Click to update link text via ref
        </Button>
      </>
    )
  }
  return <ForwardRefDemo refChild={refChild} />
}

ForwardRefs.story = {
  name: 'Forward refs',
}

export const Color = () => (
  <div>
    <Link color='text.dark'>I am a different color!</Link>
    <br />
    <Link color='secondary'>I am a different color!</Link>
    <br />
    <Link color='error'>I am a different color!</Link>
  </div>
)

export const LargeText = () => (
  <Link color='text.light'>
    <Text textStyle='heading2'>I am a link with text styles</Text>
  </Link>
)
