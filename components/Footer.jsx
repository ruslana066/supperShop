import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container' >
      <p>2023 Super Headphones</p>
      <div className='icons' >
        <Link href='/' >
            <AiFillInstagram/>
        </Link>
        <Link href='/' >
            <AiOutlineTwitter/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
