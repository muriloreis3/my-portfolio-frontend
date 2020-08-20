import Axios from 'axios';

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
  