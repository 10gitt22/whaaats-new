import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('using classes', () => {
    render(<Button className='test'>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('test')
  })
})
