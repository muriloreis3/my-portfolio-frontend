import React, {useState, useEffect} from 'react';
import Axios from 'axios';

import ProjectCard from './ProjectCard/ProjectCard'

export default function Projects(props) {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        Axios.get('http://localhost:5000/projects',{
                headers: {                  
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(resp => {
                setProjects(resp.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const openProject = (id) => {
        props.history.push('/project/'+ id);
    }

    return (
        <div>
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
