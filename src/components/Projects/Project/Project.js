import React, {useState, useEffect} from 'react'
import Axios from 'axios';

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
                <a href={project.repositoryLink}>G</a>
                <a href={project.demonstrationLink}>P</a>
            </div>
            <div>
                {project.description}
            </div>
        </div>
    )
}
