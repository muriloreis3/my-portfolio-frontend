import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'
import classes from './Header.module.css'

export default function Header(props) {
    return (
        <header className={classes.Header}>
            <Logo />
            <nav>
                <ul>
                    <li><NavLink to="">Home</NavLink></li>
                    <li><NavLink to="">Articles</NavLink></li>
                    <li><NavLink to="">Projects</NavLink></li>
                    <li><NavLink to="">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
