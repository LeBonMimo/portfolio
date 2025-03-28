import React, {useEffect, useState} from 'react'
import './Navbar.scss'

import { getImageUrl } from '../../utils'
import { List, X } from "@phosphor-icons/react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [maskWidth, setMaskWidth] = useState('0%');

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setMaskWidth('100%');
        }else{
            setMaskWidth('0%');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className='nav-container'>
            <div className='mask' style={menuOpen ? {width: '100%'} : {width: maskWidth}}></div>
            <nav className='navbar'>
                <a className='logo' href="/"><img src={getImageUrl("logo/logo.svg")} alt="logo image" /></a>
                <div className='menu'>
                    <button aria-label="Toggle Menu" className={`menu-btn ${menuOpen ? 'menu-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="first"></span>
                        <span className="second"></span>
                        <span className="third"></span>
                    </button>
                    <ul className={`menu-items ${menuOpen ? 'menu-open' : ''}`} onClick={() => setMenuOpen(false)}>
                        <li><a href="#Pres">Présentation</a></li>
                        <li><a href="#Projects">Projets</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}
