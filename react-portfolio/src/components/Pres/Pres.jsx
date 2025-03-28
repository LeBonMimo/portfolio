import React from 'react'
import './Pres.scss'
import { getImageUrl } from '../../utils'

export const Pres = () => {
  return (
    <section id="Pres" className='pres'>
      <div className="pres-container">
        <div className='design-section'>
          <div className='pres-text'>
            <h2>Design</h2>
            <p>En tant que designer passionné par l'expérience utilisateur, j'adopte une approche centrée sur l'utilisateur pour créer des interfaces intuitives et fonctionnelles.<br/>Mon objectif est d'allier esthétique et efficacité pour offrir des interfaces claires, engageantes et adaptées à chaque public cible.</p>
          </div>
          <div className='pres-images'>
            <img className='square-wave' src={getImageUrl("pres/Square-wave.svg")} alt="pres image 1" />
            <img className='square' src={getImageUrl("pres/Square.svg")} alt="pres image 2" />
          </div>
        </div>
        <div className='dev-section'>
          <div className='pres-images'>
            <img className='circles' src={getImageUrl("pres/Circles.svg")} alt="pres image 3" />
            <img className='sine-wave' src={getImageUrl("pres/Sine-wave.svg")} alt="pres image 4" />
          </div>
          <div className='pres-text'>
            <h2>Développement</h2>
            <p>Je suis un développeur Front passionné. Je combine une expertise technique solide avec une compréhension approfondie des sciences cognitives, ce qui me permet de créer des expériences utilisateurs exceptionnelles.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
