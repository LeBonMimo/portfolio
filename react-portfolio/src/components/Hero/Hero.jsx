import React from 'react'
import { getImageUrl } from '../../utils'
import './Hero.scss'

export const Hero = () => {
  return (
    <section className='container'>
      <div className='content'>
        <p className='description'>Bonjour, je m'appelle</p>
        <h1 className='title'>Guillaume SCHWAB</h1>
        <p className='description'>Je suis un développeur front-end à Strasbourg</p>
        <a className='contact-btn' href="#Contact"><span className='text'>Me contacter</span></a>
      </div>
      <div>
        <img className='hero-image' src={getImageUrl('hero/HeroImage.png')} alt="image of me" />
      </div>
    </section>
  )
}
