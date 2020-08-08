import React from 'react'
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/Logo'
import classes from './Header.module.css'

export default function Header(props) {
    const elClasses = [classes.Header, 'bg-heading'];
    return (
        <header className={elClasses.join(' ')}>
            <div className={classes.Logo}>
                <NavLink to="/" exact ><Logo width="25px" height="25px"/></NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName={classes.active}>Home</NavLink></li>
                    <li><NavLink to="/articles" activeClassName={classes.active}>Articles</NavLink></li>
                    <li><NavLink to="/projects" activeClassName={classes.active}>Projects</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={classes.active}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
