import React, { useState, useEffect } from "react";
import renderHTML from "react-render-html";

import Modal from "../../../components/UI/Modal/modal";
import Spinner from "../../../components/UI/Spinner/spinner";
import * as API from "../../../api/api";
import ProjectIcons from "../../../components/Projects/ProjectIcons/ProjectIcons";

export default function Project(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({
    description: "",
  });

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

  const data = new Date(project.createdAt);
  const mes = (data.getMonth() + 1).toString();
  

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className="fx fx-col h_100">
        <div className="Image">
          <img src={`data:image/jpeg;base64,${project.image}`} alt="" />
        </div>
        <div className="Content">
          <div className="ProjectTitle">
            <h2>{project.title}</h2>
            <ProjectIcons
              repositoryLink={props.repositoryLink}
              demonstrationLink={props.demonstrationLink}
            />
          </div>
          <div>{renderHTML(project.description)}</div>
          <div class="displayFooter">
            <em>
              Published em:{" "}
              {`${data.getDate()}/${
                mes.length === 1 ? "0" + mes : mes
              }/${data.getFullYear()}`}
            </em>
          </div>
        </div>
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
