import React from 'react'
import './portfolio.css'
import folios from './portfolioItem'

export default function Portfolio() {
  return (
    <div id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          folios.map(
            (folio) => {
              return (
                <article className='portfolio_item'>
                  <div className='portfolio_item_image'>
                    <img src={folio.image} alt={folio.title} />
                  </div>
                  <h3>{folio.title}</h3>

                  <div className='portfolio-item-cta'>
                    <a href={folio.github} className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
                    <a href={folio.demo} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>Live demo</a>
                  </div>
                </article>
              )
            }
          )
        }
      </div>
    </div>
  )
}
