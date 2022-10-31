import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      ninjas: data,
    },
  }
}

export default function NinjaPage({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninja List Website - Ninja List</title>
      </Head>
      <h1>List of all ninjas</h1>
      {ninjas.map((ninja) => (
        <Link legacyBehavior key={ninja.id} href={'/ninjas/' + ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </>
  )
}
