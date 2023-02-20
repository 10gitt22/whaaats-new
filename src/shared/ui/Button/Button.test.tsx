import { fireEvent, render, screen } from '@testing-library/react'
import { Button, ButtonVariants } from './Button'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('using classes', () => {
    render(<Button className='test'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('test')
  })

  test('renders with primary variant by default', () => {
    const { getByRole } = render(<Button>Hello</Button>)
    const button = getByRole('button')
    expect(button.classList).toContain('primary')
  })

  test('renders with clear variant when specified', () => {
    const { getByRole } = render(<Button variant={ButtonVariants.CLEAR}>Hello</Button>)
    const button = getByRole('button')
    expect(button.classList).toContain('clear')
  })

  test('renders disabled button', () => {
    const { getByRole } = render(<Button disabled>Hello</Button>)
    const button = getByRole('button')
    expect(button).toBeDisabled()
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })
})
