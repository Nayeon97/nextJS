import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={homeStyles.headingMd}>
      <Head>
        <title>Nayeon</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>NextJS 학습을 위한 blog 입니다. </p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Nayeon Blog</h2>
        <ul className={homeStyles.list}>
        </ul>
      </section>

    </div>
  )
}

export default Home
