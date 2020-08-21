import React, { useState, useEffect, useContext } from "react";

import Modal from "../../../../components/UI/Modal/modal";
import Spinner from "../../../../components/UI/Spinner/spinner";
import classes from "./Project.module.css";
import * as API from "../../../../api/api";
import { AuthContext } from "../../../../context/AuthContext";

export default function Project(props) {
  const { token } = useContext(AuthContext);
  const [projectImage, setProjectImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [project, setProject] = useState({
    title: "",
    description: "",
    keywords: "",
    repositoryLink: "",
    demonstrationLink: "",
  });

  useEffect(() => {
    if (props.match.params.id) {
      setIsLoading(true);
      API.getProject(props.match.params.id)
        .then((resp) => {
          setProject(resp);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }
  }, [props.match.params.id]);

  const saveProjectImage = (id, token) => {
    const formData = new FormData();
    formData.append("image", projectImage);
    API.saveProjectImage(formData, id, token)
      .then((resp) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const saveProject = () => {
    if (project._id) {
      API.editProject(project, token)
        .then((resp) => {
          saveProjectImage(resp._id, token);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      API.createProject(project, token)
        .then((resp) => {
          saveProjectImage(resp._id, token);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    props.history.push("/admin/projects");
  };

  const titleChangedHandler = (event) => {
    const value = event.target.value;
    setProject((prevProject) => ({
      ...prevProject,
      title: value,
    }));
  };

  const keywordsChangedHandler = (event) => {
    const value = event.target.value;
    setProject((prevProject) => ({
      ...prevProject,
      keywords: value,
    }));
  };

  const descriptionChangedHandler = (event) => {
    const value = event.target.value;
    setProject((prevProject) => ({
      ...prevProject,
      description: value,
    }));
  };

  const demonstrationLinkChangedHandler = (event) => {
    const value = event.target.value;
    setProject((prevProject) => ({
      ...prevProject,
      demonstrationLink: value,
    }));
  };

  const repositoryLinkChangedHandler = (event) => {
    const value = event.target.value;
    setProject((prevProject) => ({
      ...prevProject,
      repositoryLink: value,
    }));
  };

  const fileChangeHandler = (event) => {
    setProjectImage(event.target.files[0]);
  };

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className={classes.Project}>
        <form onSubmit={saveProject}>
          <div className="formGroup">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={titleChangedHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={project.keywords}
              onChange={keywordsChangedHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Demonstration Link</label>
            <input
              type="text"
              name="keywords"
              value={project.demonstrationLink}
              onChange={demonstrationLinkChangedHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Repository Link</label>
            <input
              type="text"
              name="keywords"
              value={project.repositoryLink}
              onChange={repositoryLinkChangedHandler}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Description</label>
            <textarea
              name="content"
              id=""
              cols="30"
              rows="10"
              value={project.description}
              onChange={descriptionChangedHandler}
            ></textarea>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={fileChangeHandler}
            ></input>
          </div>
          <button>Save</button>
        </form>
      </div>
    );
  }

  if (error) {
    content = (
      <Modal show={error !== null} closeModal={() => setError(null)}>
        {error}
      </Modal>
    );
  }

  return content;
}
