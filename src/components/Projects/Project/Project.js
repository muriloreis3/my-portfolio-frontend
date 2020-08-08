import React, {useState, useEffect} from 'react'
import Axios from 'axios';

import ProjectIcons from '../ProjectIcons/ProjectIcons'

export default function Project(props) {
    const [project, setProject] = useState({})
    useEffect(() => {
        Axios.get('http://localhost:5000/projects/'+ props.match.params.id,{
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(resp => {
            setProject(resp.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [props.match.params.id])

    return (
        <div>
            <div className="ProjectTitle">
                <h2>{project.title}</h2>
                <ProjectIcons 
                    repositoryLink={props.repositoryLink} 
                    demonstrationLink={props.demonstrationLink}/>
            </div>
            <div>
                {project.description}
            </div>
        </div>
    )
}
