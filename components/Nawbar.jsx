import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '@/contecst/StateContext'

const Nawbar = () => {

  const {showCart, setShowCart, cartItem, totalQuantities} = useStateContext()

  return (
    <div className='navbar-container' >
      <div className='logo' >
        <Link href='/' > TOmiris INC </Link>
      </div>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)} >
            <AiOutlineShopping/>
            <span className='cart-item-qty' >{totalQuantities}</span>
      </button>
      { showCart && <Cart/>}
    </div>
  )
}

export default Nawbar
