import React, { useState, useEffect, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";

import Modal from "../../../../components/UI/Modal/modal";
import Spinner from "../../../../components/UI/Spinner/spinner";
import classes from "./Project.module.css";
import * as API from "../../../../api/api";
import { AuthContext } from "../../../../context/AuthContext";
import HtmlEditor from "../../../../components/UI/HtmlEditor/HtmlEditor";

export default function Project(props) {
  const { register, handleSubmit, errors } = useForm();
  const { token } = useContext(AuthContext);

  const [projectImage, setProjectImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
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
    if (projectImage) {
      const formData = new FormData();
      formData.append("image", projectImage);
      API.saveProjectImage(formData, id, token)
        .then((resp) => {
          setIsSaving(false);
          props.history.push("/admin/projects");
        })
        .catch((error) => {
          setIsSaving(false);
          setError(error.message);
        });
    } else {
      props.history.push("/admin/projects");
    }
  };

  const saveProject = () => {
    setIsSaving(true);
    if (project._id) {
      API.editProject(project, token)
        .then((resp) => {
          saveProjectImage(resp._id, token);
        })
        .catch((error) => {
          setIsSaving(false);
          setError(error.message);
        });
    } else {
      API.createProject(project, token)
        .then((resp) => {
          saveProjectImage(resp._id, token);
        })
        .catch((error) => {
          setIsSaving(false);
          setError(error.message);
        });
    }
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

  const descriptionChangedHandler = (content, editor) => {
    setProject((prevProject) => ({
      ...prevProject,
      description: content,
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
        <form onSubmit={handleSubmit(saveProject)}>
          <div className="formGroup">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={project.title}
              onChange={titleChangedHandler}
              ref={register({ required: true })}
              className={errors.title && "inputError"}
            />
            {errors.title && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={project.keywords}
              onChange={keywordsChangedHandler}
              ref={register({ required: true })}
              className={errors.keywords && "inputError"}
            />
            {errors.keywords && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="">Demonstration Link</label>
            <input
              type="text"
              name="demonstrationLink"
              value={project.demonstrationLink}
              onChange={demonstrationLinkChangedHandler}
              ref={register({ required: true })}
              className={errors.demonstrationLink && "inputError"}
            />
            {errors.demonstrationLink && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="">Repository Link</label>
            <input
              type="text"
              name="repositoryLink"
              value={project.repositoryLink}
              onChange={repositoryLinkChangedHandler}
              ref={register}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="">Description</label>
            <HtmlEditor
              name="description"
              value={project.description}
              onEditorChange={descriptionChangedHandler}
            />
          </div>
          <div className="formGroup">
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={fileChangeHandler}
            ></input>
          </div>
          <input disabled={isSaving} type="submit" className="btn" value="Save"/>
          {isSaving && <Spinner />}
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
