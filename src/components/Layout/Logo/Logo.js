import React from 'react'

import classes from './Logo.module.css'

export default function Logo(props) {
    return (
        <div className={classes.Logo} style={{width: props.width, height: props.height}}>
            {/* <img src={myLogo} alt="myLogo"/> */}
            MA
        </div>
    )
}
