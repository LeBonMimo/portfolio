import React from 'react'
import { getImageUrl } from '../../utils'
import './Contact.scss'
import { ContactForm } from '../ContactForm/ContactForm'


export const Contact = () => {
    return (
        <section id='Contact' className="contact">
            <div className="contact-container">  
                
                <ContactForm/>
                
            </div>
        </section>
    );
}

