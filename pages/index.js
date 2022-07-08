import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Presentation from '../containers/Presentation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marcelo Crístian</title>
        <meta name="description" content="Marcelo Cristian's Personal Website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />

      <footer className={styles.footer}>
      <a
          href='https://www.linkedin.com/in/srcmarcelo/'
          target='_blank'
          rel='noopener noreferrer'
        >
          srcmarcelo{' '}
          <span className={styles.logo}>
            <Image
              src='/icons8-linkedin.svg'
              alt='LinkedIn'
              width={30}
              height={30}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}
