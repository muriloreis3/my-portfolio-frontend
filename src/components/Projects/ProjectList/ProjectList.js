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
            image={project.image ? project.image.toString() : null}
          >
            <div className="ProjectTitle">
              <h1>{project.title}</h1>
              <ProjectIcons
                repositoryLink={project.repositoryLink}
                demonstrationLink={project.demonstrationLink}
              />
              {props.admin ? (
                <div className="delete">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteProject(project._id);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ) : null}
            </div>
            <p>{project.description}</p>
          </Card>
        );
      })}
    </Fragment>
  );
};

export default ProjectList;
