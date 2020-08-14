import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './HomeMenu.module.css'

const HomeMenu = (props) => {
    return (
        <div className={classes.Menu}>
            <div className={classes.Avatar}>
                <img src={`data:image/jpeg;base64,${props.owner.avatar}`} alt=""/>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/admin/owner">My Data</NavLink></li>
                    <li><NavLink to="/admin/articles">My Articles</NavLink></li>
                    <li><NavLink to="/admin/projects">My Projects</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default HomeMenu;