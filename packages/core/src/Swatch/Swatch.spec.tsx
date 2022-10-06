import React from 'react'
import { Swatch } from '.'
import { render, fireEvent } from '../__test__/testing-library'

const mockColors = ['red', 'green', 'blue']

describe('Swatch', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Swatch colors={mockColors} />)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle(`background-color: ${color}`)
    })
  })

  it('should call onClick callback with selected color value', () => {
    const mockOnClick = jest.fn()

    const { getByTestId } = render(<Swatch colors={mockColors} onClick={mockOnClick} />)

    mockColors.map((color, idx) => {
      fireEvent.click(getByTestId(`${idx}-${color}`))
      expect(mockOnClick).toHaveBeenLastCalledWith(color)
    })
  })
})
