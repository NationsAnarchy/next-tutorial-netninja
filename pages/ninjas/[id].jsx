import React from 'react'
import Head from 'next/head'
import { userAgent } from 'next/server'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json()

  return {
    props: { ninja: data },
  }
}

export default function Details({ ninja }) {
  return (
    <div>
      <Head>
        <title>Ninja List Website - Details: {ninja.name}</title>
      </Head>
      <h1>Details: {ninja.name}</h1>
      <p>Email: {ninja.email}</p>
      <p>Phone: {ninja.phone}</p>
      <p>Website: {ninja.website}</p>
      <p>Company: {ninja.company.name}</p>
    </div>
  )
}
