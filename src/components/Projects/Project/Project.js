import React, {useState, useEffect} from 'react'
import * as API from '../../../api/api';
import ProjectIcons from '../ProjectIcons/ProjectIcons'

export default function Project(props) {
    const [project, setProject] = useState({})
    useEffect(() => {
        (async () =>  setProject(await API.getProject(props.match.params.id)))();
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
