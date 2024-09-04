import React from 'react'
import './Projects.scss'
import { getImageUrl } from '../../utils'

export const Projects = () => {
    return(
        <section className='projects'>
            <div className="projects-container">
                <h2 className='projects-title'>Projets</h2>
                <div className="projects-grid">
                    <a href='#' className="project">
                        <img className='project-logo' src={getImageUrl("logo/logo.svg")} alt="project 1" />
                        <div className="project-description">
                            <h3>guillaumme-schwab.dev</h3>
                            <p>Mon portfolio</p>
                        </div>
                    </a>
                    <a href='#' className="project">
                        <img src={getImageUrl("projects/Project1.png")} alt="project 1" />
                        <div className="project-description">
                            <h3>poufpoufpantoufle.fr</h3>
                            <p>Site de mon groupe de musique</p>
                        </div>
                    </a>
                    <a href='#' className="project">
                        <img src={getImageUrl("projects/Project1.png")} alt="project 1" />
                        <div className="project-description">
                            <h3>jeun'est.fr</h3>
                            <p>Projet durant mon alternance</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
    
}