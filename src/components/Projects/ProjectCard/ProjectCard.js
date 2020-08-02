import React from 'react'

export default function ProjectCard(props) {
    return (
        <div className="card" onClick={props.clicked}>
            <div className="ProjectTitle">
                <h2>{props.title}</h2>
                <a href={props.repositoryLink}>G</a>
                <a href={props.demonstrationLink}>P</a>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
