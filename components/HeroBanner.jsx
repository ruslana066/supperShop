import React from 'react'
import Link from 'next/link'

import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBanner}) => {
  return (
    <div className='hero-banner-conteiner'>
      <p className='beats-solo'>{heroBanner.smallText}</p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={urlFor(heroBanner.image)} alt="" className='hero-banner-image'/>
      <div>
        <Link href="#">
            <button type='button'>Shop Now</button>
        </Link>
        <div className='desc'>
            <h5>{heroBanner.discount}</h5>
            <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
