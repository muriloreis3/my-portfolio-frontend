import React, {useState, useEffect} from 'react';
import * as API from '../../api/api';

import ProjectList from '../../components/Projects/ProjectList/ProjectList';

export default function Projects(props) {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        API.getProjects()
            .then(resp => {
                setProjects(resp);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    const openProject = (id) => {
        props.history.push('/project/'+ id);
    }

    return (
        <div className="cardWrapper">
            <ProjectList projects={projects} openProject={openProject}/>
        </div>
    )
}
