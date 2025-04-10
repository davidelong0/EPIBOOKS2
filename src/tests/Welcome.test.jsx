import { render, screen } from '@testing-library/react'
import Welcome from '../components/Welcome' 

describe('Welcome component', () => {
  it('renders the heading text', () => {
    render(<Welcome />)
    const heading = screen.getByText('Hey, nice to see you')
    expect(heading).toBeInTheDocument()
  })

  it('renders the alert paragraph text', () => {
    render(<Welcome />)
    expect(
      screen.getByText(/you successfully read this important alert message/i)
    ).toBeInTheDocument()
  })
})
