import React from 'react'
import ProjectIcons from '../ProjectIcons/ProjectIcons'

export default function ProjectCard(props) {
    return (
        <div className="card" onClick={props.clicked}>
            <div className="ProjectTitle">
                <h2>{props.title}</h2>
                <ProjectIcons 
                    repositoryLink={props.repositoryLink} 
                    demonstrationLink={props.demonstrationLink}/>
            </div>
            <p>{props.description}</p>
        </div>
    )
}
