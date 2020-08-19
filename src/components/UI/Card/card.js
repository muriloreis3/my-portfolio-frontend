import React from 'react'

import classes from './card.module.css';

const card = (props) => {
    return (
        <div className={classes.Card} onClick={props.clicked}>
            <div className={classes.Image}>
                <img src={`data:image/jpeg;base64,${props.image}`} alt=""/>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default card;