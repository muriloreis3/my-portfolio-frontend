import React, { Fragment } from "react";

import Card from "../../UI/Card/card";
import ProjectIcons from "../ProjectIcons/ProjectIcons";

const ProjectList = (props) => {
  return (
    <Fragment>
      {props.projects.map((project) => {
        return (
          <Card
            key={project._id}
            clicked={() => props.openProject(project._id)}
          >
            <div className="ProjectTitle">
              <h2>{project.title}</h2>
              <ProjectIcons 
                    repositoryLink={props.repositoryLink} 
                    demonstrationLink={props.demonstrationLink}/>
            </div>
            <p>{project.description}</p>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default ProjectList;
