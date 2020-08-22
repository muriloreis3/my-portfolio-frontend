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
                    <li><NavLink to="/admin/owner" activeClassName={classes.active}>My Data</NavLink></li>
                    <li><NavLink to="/admin/articles" activeClassName={classes.active}>My Articles</NavLink></li>
                    <li><NavLink to="/admin/projects" activeClassName={classes.active}>My Projects</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default HomeMenu;