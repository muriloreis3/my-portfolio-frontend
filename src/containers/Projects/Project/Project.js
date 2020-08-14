import React, {useState, useEffect} from 'react'
import * as API from '../../../api/api';
import ProjectIcons from '../../../components/Projects/ProjectIcons/ProjectIcons'

export default function Project(props) {
    const [project, setProject] = useState({})

    useEffect(() => {
        API.getProject(props.match.params.id)
            .then(resp => {
                setProject(resp);
            }).catch(error => {
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
