import React from 'react'
import { getImageUrl } from '../../utils'
import './ContactLinks.scss'

export const ContactLinks = ({svg, href, alt, title}) => {
    return (
        <a className='contact-link' href={href} title={title}>
            <img src={getImageUrl(svg)} alt={alt} />
        </a>
    );
}

