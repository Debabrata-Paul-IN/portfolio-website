import React from 'react';
import CV from '../../assets/Debabrata_Paul_Resume.pdf';

export default function CTA() {
  return (
    <div className='cta'>
        <a href={CV} className='btn' download>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
