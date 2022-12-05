/*
* Amanpreet Kapoor Module 6 Slides
*/
import Head from 'next/head'

import Router from 'next/router';

import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Food Finder</title>
      </Head>

      <div className={styles.pageContainer}>

        <h1>Food Finder</h1>
        
        <div className={styles.btnContainer}>
          <div onClick={() => Router.push('/merge')}>
            Merge Sort
          </div>
          <div onClick={() => Router.push('/quick')}>
            Quick Sort
          </div>
        </div>

      </div>

    </>
  )
}