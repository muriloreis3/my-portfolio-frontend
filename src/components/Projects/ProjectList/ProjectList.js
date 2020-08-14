import React, { Fragment } from 'react';

import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectList = (props) => {
    return (
        <Fragment>
            {
                props.projects.map(project => {
                    return <ProjectCard
                                key={project._id} 
                                title={project.title} 
                                description={project.description}
                                repositoryLink={project.repositoryLink}
                                demonstrationLink={project.demonstrationLink}
                                clicked={() => props.openProject(project._id)}
                                />
                })
            }
        </Fragment>
    )
}

export default ProjectList;