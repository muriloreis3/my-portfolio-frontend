import Axios from "axios";

export const getProject = async (id) => {
  try {
    const project = await Axios.get(
      "http://localhost:5000/api/projects/" + id,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return project.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProjects = async () => {
  try {
    const projects = await Axios.get("http://localhost:5000/api/projects/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return projects.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const editProject = async (project, token) => {
  let objProject = {
    title: project.title,
    keywords: project.keywords,
    description: project.description,
    repositoryLink: project.repositoryLink,
    demonstrationLink: project.demonstrationLink
  };
  try {
    const resp = await Axios.patch(
      "http://localhost:5000/api/projects/" + project._id,
      objProject,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createProject = async (project, token) => {
  let objProject = {
    title: project.title,
    keywords: project.keywords,
    description: project.description,
    repositoryLink: project.repositoryLink,
    demonstrationLink: project.demonstrationLink
  };
  try {
    const project = await Axios.post(
      "http://localhost:5000/api/projects/",
      objProject,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return project.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveProjectImage = async (formData, id, token) => {
  try {
    await Axios.post(
      "http://localhost:5000/api/projects/image/" + id,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProject = async (id, token) => {
  try {
    const project = await Axios.delete(
      "http://localhost:5000/api/projects/" + id,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return project.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
