import React from 'react'
import { getImageUrl } from '../../utils'
import './Hero.scss'

export const Hero = () => {
  return (
    <section className='container'>
        <div className='content'>
            <p className='description'>Bonjour, je m'appelle</p>
            <h1 className='title'>Guillaume SCHWAB</h1>
            <p className='description'>Développeur front-end à strasbourg</p>
            <a className='contact-btn' href="mailto:schwab.guillaume@gmail.com">Me contacter</a>
        </div>
        <div className='hero-image'></div>
    </section>
  )
}
