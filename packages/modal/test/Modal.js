import React from 'react'
import { render } from '@testing-library/react'
import { Modal } from '../src/index'
import { ThemeProvider, theme } from 'pcln-design-system'

const customRender = (node, ...options) => {
  const rendered = render(
    <ThemeProvider theme={theme}>{node}</ThemeProvider>,
    options
  )

  return {
    ...rendered,
    rerender: (ui, options) =>
      customRender(ui, { container: rendered.container, ...options })
  }
}

describe('Modal', () => {
  const { rerender } = customRender(
    <Modal width={['100px', '200px', '500px']}>
      <div />
    </Modal>
  )
  test('renders when close', () => {
    const { queryByText } = rerender(
      <ThemeProvider>
        <Modal width={['100px', '200px', '500px']}>
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    expect(queryByText('Content')).toBeFalsy()
  })
  test('renders when open', () => {
    const { getByText, container } = rerender(
      <ThemeProvider>
        <Modal width={['100px', '200px', '500px']} isOpen>
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders when enable overflow and disable close button', () => {
    const { getByText, getByTestId, container } = rerender(
      <ThemeProvider>
        <Modal
          width={['100px', '200px', '500px']}
          isOpen
          enableOverflow
          imgMode
        >
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(getByTestId('pcln-modal-close')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders when enable header close button', () => {
    const { getByText } = rerender(
      <ThemeProvider>
        <Modal
          width={['100px', '200px', '500px']}
          isOpen
          header={<div>header</div>}
        >
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    expect(getByText('header')).toBeTruthy()
  })
  test('renders with top alignment', () => {
    const { getByText, getByTestId, container } = rerender(
      <ThemeProvider>
        <Modal isOpen enableOverflow verticalAlignment="top">
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(getByTestId('pcln-modal-close')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('renders with custom animation', () => {
    const { getByText, getByTestId, container } = rerender(
      <ThemeProvider>
        <Modal
          isOpen
          enableOverflow
          overlayAnimation={transitionstate =>
            `${transitionstate === 'entering' ? `transform: scale(0.5);` : ''}`
          }
        >
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(getByTestId('pcln-modal-close')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('uses fullScreen styles', () => {
    const { getByText, getByTestId } = rerender(
      <ThemeProvider>
        <Modal isOpen fullScreen>
          <div data-content>Content</div>
        </Modal>
      </ThemeProvider>
    )
    const dialogContent = getByTestId('dialog-content')

    expect(getByText('Content')).toBeTruthy()
    expect(dialogContent).toHaveStyle(`
      height: 100vh;
      width: 100vw;
    `)
    expect(dialogContent).not.toHaveStyle(`
      max-height: 100vh;
      max-width: calc(100vw - 32px);
    `)
  })
})
