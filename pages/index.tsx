import Head from 'next/head'

import { useDispatch, useSelector } from 'react-redux';
import { countUp } from 'store/actions/count';

import styles from 'styles/Home.module.css'
import styled from 'styled-components';
import teststyles from 'styles/Test.module.scss'

const NavbarWrapper = styled.div`
  background-color: red;
  padding: ${({ theme }) => theme.colors.black}
`

const ButtonTest = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ededed;
`

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(state => state['counter'])

  const test = () => {
    dispatch(countUp())
  }

  return (
    <NavbarWrapper>
        <ButtonTest onClick={test}>test{count.value}</ButtonTest>
        <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={teststyles.title}>Test Test</div>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </NavbarWrapper>
  )
}
