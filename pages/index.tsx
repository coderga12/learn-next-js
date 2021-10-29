import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef, RefObject, MutableRefObject } from 'react'


const Home: NextPage = () => {

  return (
    <>
      <div className={styles.container}>
        <button>Click me to push</button>
        <h3>Toi ow day voi ban</h3>
      </div>
    </>
  )
}

export default Home
