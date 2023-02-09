import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {MdOutlineWorkOutline} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'
import { useState } from 'react'


export default function Nav() {
  const [activeNav, setActiveNav] = useState('/')
  return (
    <nav>
      <a  href='/' onClick={()=>setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('about')} className={activeNav === 'about'? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skills' onClick={()=>setActiveNav('skills')} className={activeNav === 'skills'? 'active' : ''}><HiOutlineLightBulb/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('portfolio')} className={activeNav === 'portfolio'? 'active' : ''}><MdOutlineWorkOutline/></a>
      <a href='#contact' onClick={()=>setActiveNav('contact')} className={activeNav === 'contact'? 'active' : ''}><BiMessageAltDetail/></a>
    </nav>
  )
}
