import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';
import {FaTwitter} from 'react-icons/fa';

export default function HeaderSocial() {
  return (
    <div className='header-social'>
        <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://facebook.com' target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
        <a href='https://twitter.com' target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
    </div>
  )
}
