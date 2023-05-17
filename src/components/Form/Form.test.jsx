import React from 'react'
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import axios from 'axios'
import Form from './Form'
import matchers from '@testing-library/jest-dom/matchers'

expect.extend(matchers)
describe('Form component', () => {
  beforeEach(() => {
    render(<Form />)
  })

  it('should display a search button', () => {
    const button = screen.getByRole('button', {
      name: /search/i,
    })
    expect(button).toBeInTheDocument()
  })
})
