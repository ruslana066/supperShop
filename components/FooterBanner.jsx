import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/client'
// import product from '@/sanityecommerce/schemas/product'

const FooterBanner = ({footerBanner: {discount, product, largeText1, largeText2, saleTime, smallText, buttonText, desc, image, midText}}) => {
  return (
    <div className='footer-banner-conteiner' >
      <div className='banner-desc' > 
        <div className='left' >
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
        </div>
        <div className='right' >
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <p>{desc}</p>
            <Link href={`/product/${product}`} >
                <button>{buttonText}</button>
            </Link>
        </div>

        <img src={urlFor(image)} alt="" className='footer-banner-image' />
      </div>
    </div>
  )
}

export default FooterBanner
