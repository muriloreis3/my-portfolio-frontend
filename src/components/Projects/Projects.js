import React, {useState, useEffect} from 'react';
import * as API from '../../api/api';

import ProjectCard from './ProjectCard/ProjectCard'

export default function Projects(props) {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        (async () =>  setProjects(await API.getProjects()))();
    }, []);

    const openProject = (id) => {
        props.history.push('/project/'+ id);
    }

    return (
        <div className="cardWrapper">
            {
                projects.map(project => {
                    return <ProjectCard
                                key={project._id} 
                                title={project.title} 
                                description={project.description}
                                repositoryLink={project.repositoryLink}
                                demonstrationLink={project.demonstrationLink}
                                clicked={() => openProject(project._id)}
                                />
                })
            }
        </div>
    )
}
