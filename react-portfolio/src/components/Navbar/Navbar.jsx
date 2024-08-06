import React, {useState} from 'react'
import './Navbar.scss'

import { getImageUrl } from '../../utils'
import { List, X } from "@phosphor-icons/react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='navbar'>
            <a className='logo' href="/"><img src={getImageUrl("logo/logo.png")} alt="logo image" /></a>
            <div className='menu'>
                {
                    menuOpen 
                    ? <X className='menu-btn' size={36} color="#ffffff" alt='menu-close-button' onClick={() => setMenuOpen(!menuOpen)}/> 
                    : <List className='menu-btn' size={36} color="#ffffff" alt='menu-button' onClick={() => setMenuOpen(!menuOpen)}/>
                }
                <ul className={`${'menu-items'} ${menuOpen && 'menu-open'}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">Projets</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
