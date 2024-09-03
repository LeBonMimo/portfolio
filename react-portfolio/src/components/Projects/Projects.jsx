import React from 'react'
import './Projects.scss'
import { getImageUrl } from '../../utils'

export const Projects = () => {
    return(
        <section className='projects'>
            <div className="projects-container">
                <h2 className='projects-title'>Projets</h2>
                <div className="projects-grid">
                    <div className="project">
                        <img src={getImageUrl("projects/Project1.png")} alt="project 1" />
                        <div className="project-description"></div>
                    </div>
                    <div className="project">
                        <img src={getImageUrl("projects/Project1.png")} alt="project 1" />
                        <div className="project-description"></div>
                    </div>
                    <div className="project">
                        <img src={getImageUrl("projects/Project1.png")} alt="project 1" />
                        <div className="project-description"></div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}