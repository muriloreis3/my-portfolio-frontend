import React, { Fragment } from "react";
import renderHTML from "react-render-html";

import Card from "../../UI/Card/card";
import Tags from "../../UI/Tags/Tags";
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
              <div className="w_100 m-bottom_10">
                <div className="group">
                  <h1>{project.title}</h1>
                  <ProjectIcons
                    repositoryLink={project.repositoryLink}
                    demonstrationLink={project.demonstrationLink}
                  />
                  {props.admin && (
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
                  )}
                </div>
                {project.keywords && <Tags content={project.keywords} />}
              </div>
            </div>
            {renderHTML(project.description)}
          </Card>
        );
      })}
    </Fragment>
  );
};

export default ProjectList;
