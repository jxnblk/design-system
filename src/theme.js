import { darken, brighten } from './color'

const createMediaQuery = n => `@media screen and (min-width:${n}em)`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get () {
        return this[i]
      }
    })
  )

export const breakpoints = [
  32,
  40,
  48,
  64
]

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = [
  'sm',
  'md',
  'lg',
  'xl'
]

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [
  0,
  4,
  8,
  16,
  32,
  64,
  128
]

export const font = `'Helvetica Neue',Helvetica,Arial,sans-serif`

export const fontSizes = [
  12,
  14,
  16,
  20,
  24,
  32,
  48
]

export const regular = 400
export const bold = 700

// color palette
const black = '#000'
const white = '#fff'
const text = '#001731'
const blue = '#007aff'
const gray = '#596b7d'
const green = '#0a0'
const red = '#c00'
const orange = '#f90'
const purple = '#7600bb'

// tints
const flatten = (name, colors) => colors
  .reduce((a, b, i) => {
    const color = {
      [name + i]: b
    }
    return {...a, ...color}
  }, {})

const blues = [brighten(blue), blue, darken(blue)]
const grays = [brighten(gray), gray, darken(gray)]
const greens = [brighten(green), green, darken(green)]
const reds = [brighten(red), red, darken(red)]
const oranges = [brighten(orange), orange, darken(orange)]
const purples = [brighten(purple), purple, darken(purple)]

export const colors = {
  black,
  white,
  text,
  blue,
  gray,
  green,
  red,
  orange,
  purple,
  blues,
  greens,
  reds,
  oranges,
  purples,
  ...flatten('blue', blues),
  ...flatten('gray', grays),
  ...flatten('green', greens),
  ...flatten('red', reds),
  ...flatten('orange', oranges),
  ...flatten('purple', purples)
}

export const radius = '2px'

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  regular,
  bold,
  colors,
  radius
}

export default theme
