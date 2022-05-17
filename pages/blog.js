import Head from "next/head";
import styles from '../styles/Home.module.css'

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josimar Lopes Portfolio</title>
        <meta name="description" content="Josimar Lopes | Software · System Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Comming soon! (*^_^*)</p>
      </main>
    </div>
  )
}
