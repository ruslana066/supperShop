import React from 'react';
import Link from 'next/link';
import {client} from '@/lib/client';
// import FooterBanner from '../components';

import {Products, HeroBanner, FooterBanner} from '../components'


const Page = ({products, bannerData}) => {
  const arr = ['df', 'dfsa', 'sdfs']
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}
      {console.log(products)}


      <div className='products-conteiner'> 
        {products.map(item => ( 
            <Products product={item} />
        ))}
      </div>
      
      <FooterBanner footerBanner={bannerData.length && bannerData[0]}  />

      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  return {
      props: { products, bannerData }
  }
}

export default Page
