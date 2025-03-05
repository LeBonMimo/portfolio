import React from 'react'
import './Projects.scss'
import { getImageUrl } from '../../utils'
import { Testimonials } from "../Testimonials/Testimonials"

export const Projects = () => {
    return(
        <section id='Projects' className='projects'>
            <div className="projects-container">
                <h2 className='projects-title'>Projets</h2>
                <div className="projects-grid">
                    <a href='#' className="project">
                        <img className='project-logo' src={getImageUrl("logo/logo.svg")} alt="projet portfolio" />
                        <div className="project-description">
                            <h3>guillaumme-schwab.dev</h3>
                            <p>Mon portfolio</p>
                        </div>
                    </a>
                    <a href='https://poufpoufpantoufle.fr' className="project">
                        <img className='project-logo-ppp' src={getImageUrl("projects/PPP.png")} alt="project poufpoufpantoufle" />
                        <div className="project-description">
                            <h3>poufpoufpantoufle.fr</h3>
                            <p>Site de mon groupe de musique</p>
                        </div>
                    </a>
                    <a href='https://zap88.vosges.fr/Beneficiaires/Views/Accueil.aspx' className="project zap88">
                        <img className='project-logo' src={getImageUrl("projects/Zap-vosge.png")} alt="project 1" />
                        <div className="project-description">
                            <h3>zap88.vosges.fr</h3>
                            <p>Projet durant mon alternance</p>
                        </div>
                    </a>
                    <a href='https://www.olalao-jeanne.fr/' className="project">
                        <img className='project-logo' src={getImageUrl("projects/logo-olalao-jeanne.png")} alt="project Olalao-jeanne" />
                        <div className="project-description">
                            <h3>olalao-jeanne.fr</h3>
                            <p>Projet freelance pour Jeanne, une artiste talentueuse de Metz</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="testimonials-container">
                <Testimonials />
            </div>
        </section>
    )
    
}