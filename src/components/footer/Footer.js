import React from 'react'
import './footer.css'
import {BsTwitter,BsFacebook,BsLinkedin} from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <a href='/' className='footer_logo'>Debabrata Paul</a>
      <ul className='permalinks'>
      <li><a href='/'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer_social'>
      <a href='https://facebook.com/paul.debujnv'><BsFacebook/></a>
      <a href='https://www.linkedin.com/in/debabrata-paul-230618b5/'><BsLinkedin/></a>
      <a href='https://twitter.com/DebabrataPaul12'><BsTwitter/></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Debabrata Paul. All rights reserved.</small>
      </div>
    </footer>
  )
}
