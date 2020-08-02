import React from 'react'

export default function ArticleCard(props) {
    return (
        <div className="card" onClick={props.clicked}>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}
