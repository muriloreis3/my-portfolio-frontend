import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import ProjectList from "../../../components/Projects/ProjectList/ProjectList";
import Modal from "../../../components/UI/Modal/modal";
import ConfirmModal from "../../../components/UI/Modal/ConfirmModal/ConfirmModal";
import Spinner from "../../../components/UI/Spinner/spinner";
import * as API from "../../../api/api";
import classes from "./Projects.module.css";

import { AuthContext } from "../../../context/AuthContext";

export default function Projects(props) {
  const location = useLocation();
  const {token } = useContext(AuthContext);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    API.getProjects()
      .then((resp) => {
        setIsLoading(false);
        setError(null);
        setProjects(resp);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [location]);

  const openProject = (id) => {
    props.history.push("/admin/project/" + id);
  };

  const newProject = () => {
    props.history.push("/admin/project/");
  };

  const deleteProject = (id) => {
      setIsDeleting(true);
      setDeleteId(id);
  };

  const deleteProjectApi = () => {
    API.deleteProject(deleteId, token)
    .then((resp) => {
      setDeleteId(null);
      const updatedProjects = projects.filter(project => project._id !== resp._id);
      setProjects(updatedProjects);
    })
    .catch((error) => {
      setError(error.message);
    });
  };

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className="cardWrapper">
        <div className={classes.Button}>
          <button className="btn" onClick={newProject}>+</button>
        </div>
        <ProjectList
          projects={projects}
          openProject={openProject}
          admin
          onDeleteProject={deleteProject}
        />
        {isDeleting && (
          <ConfirmModal
            show={isDeleting}
            modalClose={() => {setIsDeleting(false); setDeleteId(null)}}
            confirm={deleteProjectApi}
          >
            <p>Are you sure?</p>
          </ConfirmModal>
        )}
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
