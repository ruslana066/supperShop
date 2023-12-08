import { urlFor } from '@/lib/client'
import Link from 'next/link';
import React from 'react';

const Products = ({product: {image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`product/${slug.current}`} >
        <div className='product-card'>
            <img src={urlFor(image && image[0])} 
                className='product-image'
                width={250}
                height={250}
            />
            <p className='product-name' >{name}</p>
            <p className='product-price' >${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Products
