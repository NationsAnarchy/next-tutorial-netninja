import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className='logo'>
          <Image src='/logo.jpg' width={'75'} height={'75'} alt='logo' />
        </div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja Listings</Link>
      </nav>
    </div>
  )
}
