import React from 'react'

import classes from './card.module.css';

const card = (props) => {
    return (
        <div 
            className={classes.Card}
            onClick={props.clicked}
            style={{
                backgroundImage: `url(data:image/jpeg;base64,${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className={classes.Backdrop}></div>
            <div className={classes.Content}>
                {props.children}
            </div>
        </div>
    )
}

export default card;