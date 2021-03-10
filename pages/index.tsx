import Head from 'next/head'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { countUp } from 'store/actions/count';
import { search } from 'store/actions/search';


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
  const searchData = useSelector(state => state['search'])

  const test = () => {
    dispatch(countUp())
  }

  const test2 = useCallback(() => {
    dispatch(search({test: 'test1'})) 
    //'superman'
  }, [])

  return (
    <NavbarWrapper>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ButtonTest onClick={test}>test{count.value}</ButtonTest>
        <ButtonTest onClick={test2}>test2</ButtonTest>
        <div className={styles.container}>
        {searchData.data && (
        <div>
          {searchData.data.map((show, index) => (
            <div key={index}>
              <a href={show.url}>{show.name}</a>
              <div>점수 : {show.score}</div>
              <div>타입 : {show.type}</div>
              <div>언어 : {show.language}</div>
            </div>
          ))}
        </div>
      )}

      </div>
    </NavbarWrapper>
  )
}
