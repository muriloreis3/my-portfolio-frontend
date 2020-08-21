import React, { useState, useEffect } from "react";
import * as API from "../../api/api";

import Modal from "../../components/UI/Modal/modal";
import Spinner from "../../components/UI/Spinner/spinner";
import ProjectList from "../../components/Projects/ProjectList/ProjectList";

export default function Projects(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    API.getProjects()
      .then((resp) => {
        setIsLoading(false);
        setProjects(resp);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  const openProject = (id) => {
    props.history.push("/project/" + id);
  };

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className="cardWrapper">
        <ProjectList projects={projects} openProject={openProject} />
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
