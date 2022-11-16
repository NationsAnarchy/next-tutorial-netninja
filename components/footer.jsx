import React from 'react'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      Copyright {year} - Ninja List Website. Thanks{' '}
      <a href='https://netninja.dev' target='_blank' rel='noreferrer'>
        Shaun aka The Net Ninja Dev.
      </a>
    </footer>
  )
}
