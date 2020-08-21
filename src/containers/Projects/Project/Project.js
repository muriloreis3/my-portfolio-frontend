import React, { useState, useEffect } from "react";

import Modal from "../../../components/UI/Modal/modal";
import Spinner from "../../../components/UI/Spinner/spinner";
import * as API from "../../../api/api";
import ProjectIcons from "../../../components/Projects/ProjectIcons/ProjectIcons";

export default function Project(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
    setIsLoading(true);
    API.getProject(props.match.params.id)
      .then((resp) => {
        setIsLoading(false);
        setProject(resp);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [props.match.params.id]);

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div>
        <div className="ProjectTitle">
          <h2>{project.title}</h2>
          <ProjectIcons
            repositoryLink={props.repositoryLink}
            demonstrationLink={props.demonstrationLink}
          />
        </div>
        <div>{project.description}</div>
      </div>
    );
  }
  if (error) {
    content = (
      <Modal
        show={error !== null}
        modalClose={() => {
          setError(null);
        }}
      >
        {error}
      </Modal>
    );
  }

  return content;
}
