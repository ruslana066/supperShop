import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '@/contecst/StateContext'
import { runFireworks } from '@/lib/utils'

const Success = () => {
    const { setCartItems, setTotalPrice, settotalQuantities } = useStateContext()

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        settotalQuantities(0)

        runFireworks()
    }, [])

    return (
        <div className='success-wrapper' >
            <div className='success' >
                <p className='icon' >  
                    <BsBagCheckFill/>
                </p>
                <h2>
                    spasibo for order
                </h2>
                <p className='email-msg' >
                    chec email
                </p>
                <p className='discription' >
                    if you have any <a href='@@' >@@@</a>
                </p>
                <Link href='/' >
                    <button type='button' className='btn' width='300px'  >
                        Contiune Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success