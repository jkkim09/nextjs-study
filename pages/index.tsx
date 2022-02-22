import Head from 'next/head'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from 'store/reducers'
import { countUp, countDown } from 'store/actions/count';
import { search } from 'store/actions/search';
import { test } from 'store/actions/test'


import styles from 'styles/Home.module.css'
import styled from 'styled-components';
import { wrapper } from '../store';
import { END } from 'redux-saga';

const NavbarWrapper = styled.div`
  background-color: #ededed;
  padding: ${({ theme }) => theme.colors.black}
`
const Home = (ee) => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter)
  const searchData = useSelector((state: RootState) => state.search)
  const testS = useSelector((state: RootState) => state.test)
  console.log(ee, searchData)

  const upEvent = useCallback(() => {
    dispatch(countUp())
  }, [])

  const downEvent = useCallback(() => {
    dispatch(countDown())
  }, [])

  const searchEvent = useCallback(() => {
    dispatch(search({ test: 'test1' })) 
    dispatch(test())
    //'superman' 
  }, [])

  return (
    <NavbarWrapper>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.home}>
          <h1>test value: {testS.testValue}</h1>
          <div className={styles['counter__text']}>{value}</div>
          <div className={styles['button__area']}>
            <button onClick={upEvent}>Up</button>
            <button onClick={downEvent}>Down</button>
          </div>
          <button onClick={searchEvent}>Search</button>
        </div>
        {
          searchData.data &&
          <div>
            {
              searchData.data.map((show, index) => (
                <div key={index}>
                  <a href={show.url}>{show.name}</a>
                  <div>점수 : {show.score}</div>
                  <div>타입 : {show.type}</div>
                  <div>언어 : {show.language}</div>
                </div>
              ))
            }
          </div>
        }
    </NavbarWrapper>
  )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(
  async (ctx) => {
    console.log("SSR PAGE")
    const returnData = await ctx.store.dispatch(search({test: 'test1'}));
    ctx.store.dispatch(test())
    ctx.store.dispatch(END);
    await ctx.store.sagaTask.toPromise();
    return {
      props: {
        "test": "test"
      }, // will be passed to the page component as props
    };
  }
);