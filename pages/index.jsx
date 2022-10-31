import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List Website - Home</title>
      </Head>
      <main>
        <h1 className={styles.title}>Main page</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque porro
          dolor inventore. Placeat quisquam ad sit quaerat rerum iure delectus,
          ullam, recusandae ducimus eveniet molestias rem, consequuntur ex
          laudantium? Doloribus ut facere saepe magnam necessitatibus dolorem
          ipsum soluta voluptatibus? Adipisci, repellat? Eligendi dolorem ex
          maxime ad iusto doloremque dolores laboriosam!
        </p>
        <Link href='/ninjas'>
          <button className={styles.btn}>See all Ninjas here</button>
        </Link>
      </main>
    </>
  )
}
