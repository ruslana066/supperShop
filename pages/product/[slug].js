import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '@/lib/client';
import { useStateContext } from '@/contecst/StateContext';
import { Products } from '../../components'

const ProductDetails = ({product, products}) => {

    const { image, details, name, price } = product


    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

    const [index, setIndex] = useState(0)

    const HanndelByNow = () => {
        onAdd(product, qty)
        setShowCart(true)
    }

    return (
        <div>

            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src= {urlFor(image && image[index])} className='prodict-detail-image' />
                    </div>
                    <div className='small-images-container' >
                        {
                            image?.map((item, i) => (
                                <img src={urlFor(item)} 
                                key={i} 
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                                 />
                            ))
                        }
                    </div>
                </div>
                <div className='product-detail-desc' >
                        <h1>{name}</h1>
                        <div className='reviews' >
                            <div>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar/>
                            </div>
                            <p>(20)</p>
                        </div>
                        <h4>Details</h4>
                        <p>{details}</p>
                        <p className='price' >${price}</p>
                        <div className='quantity' >
                            <h3>Quantity</h3>
                            <p className='quantity-desc' >
                                <span className='minus' onClick={decQty} >
                                    <AiOutlineMinus/>
                                </span>
                                <span className='num' >
                                    {qty}
                                </span>
                                <span className='plus' onClick={incQty} >
                                    <AiOutlinePlus/>
                                </span>
                            </p>
                        </div>
                        <div className='div-button' >
                            <button type='button' className='add-to-cart' onClick={() => onAdd(product, qty)} >
                                Add To Cart
                            </button>
                            <button type='button' className='buy-now' onClick={HanndelByNow} >
                                Buy Now
                            </button>
                        </div>
                </div>
            </div>
            
            <div className='maylike-products-wrapper'> 
                <h3>More:</h3>
                <div className='marquee' >
                    <div className='maylike-products-container track' >
                        {products.map(item => ( 
                            <Products product={item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == 'product'] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: {slug} }) => {
    const query = `*[_type == 'product' && slug.current == '${slug}'][0]`;
    const productQuety = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productQuety);

    console.log(product, products)

    return {
        props: {product, products}
    }
}

export default ProductDetails;