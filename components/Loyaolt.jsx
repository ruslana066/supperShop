import React from 'react'
import Head from 'next/head'

import Nawbar from './Nawbar'
import Footer from './Footer'

const Loyaolt = ({children}) => {
  return (
    <div className='layaout'>
      <Head>
        <title>Ruslana Developer</title>
      </Head>
      <header>
        <Nawbar/>
      </header>
      <main className='main-conteiner' >
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Loyaolt
