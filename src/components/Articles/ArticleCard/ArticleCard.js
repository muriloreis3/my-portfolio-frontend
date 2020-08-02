import React from 'react'

import classes from './ArticleCard.module.css'

export default function ArticleCard(props) {
    return (
        <div className={classes.ArticleCard} onClick={props.clicked}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}
