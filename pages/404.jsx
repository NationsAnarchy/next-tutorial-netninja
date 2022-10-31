import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NotFoundPage() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [router])

  return (
    <div className='not-found'>
      <h1>Oops...</h1>
      <h2>This is nowhere near to be found, even for Ninjas :(</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <span>home page</span>
        </Link>
      </p>
    </div>
  )
}
