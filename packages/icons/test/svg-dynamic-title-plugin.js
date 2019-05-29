import { transform } from '@babel/core'
import dynamicTitlePlugin from '../plugins/svg-dynamic-title-plugin'

const testPlugin = (code, options) => {
  const result = transform(code, {
    plugins: ['@babel/plugin-syntax-jsx', [dynamicTitlePlugin, options]],
    configFile: false
  })

  return result.code
}

describe('Dynamic SVG title plugin', () => {
  it(`should add 'title' and 'desc' as children to the 'svg' element`, () => {
    expect(testPlugin('<Svg></Svg>')).toMatchSnapshot(
      `'<Svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}</Svg>'`
    )
  })

  it(`should remove default 'title' element and add the 'title/desc JSX expression'`, () => {
    expect(testPlugin('<Svg><title>Hello</title></Svg>')).toMatchSnapshot(
      `'<Svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}</Svg>'`
    )
  })

  it(`should remove default 'title & desc' elements and add the 'title and JSX expression'`, () => {
    expect(
      testPlugin('<Svg><title>Hello</title><desc>World</desc></Svg>')
    ).toMatchSnapshot(
      `'<Svg>{!!title && (<title id={titleId}>{title}</title>)}{!!desc && (<desc id={descId}>{desc}</desc>)}</Svg>'`
    )
  })
})
