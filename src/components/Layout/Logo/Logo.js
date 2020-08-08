import React from 'react'

import classes from './Logo.module.css'
import myLogo from '../../../assets/images/logo.png';

export default function Logo() {
    return (
        <div className={classes.Logo}>
            <img src={myLogo} alt="myLogo"/>
        </div>
    )
}
