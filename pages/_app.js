import React from 'react'
import { Toaster } from 'react-hot-toast'
import NextNProgress from 'nextjs-progressbar'

import '../styles/globals.css'

import { Layout } from '../components'
import { StateContext } from '../context/StateContext' 


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <NextNProgress color='red' height={5}/>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>

  )
}

export default MyApp
