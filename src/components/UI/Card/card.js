import React from 'react'

import classes from './card.module.css';

const card = (props) => {
    return (
        <div className={classes.Card} onClick={props.clicked}>
            {props.children}
        </div>
    )
}

export default card;