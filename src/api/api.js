import Axios from "axios";

export const getOwner = async () => {
  try {
    const owner = await Axios.get("http://localhost:5000/api/owner/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return owner.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const saveOwner = async (owner, token) => {
  let objOwner;
  if (owner.password) {
    objOwner = {
      bio: owner.bio,
      email: owner.email,
      name: owner.name,
    };
  } else {
    objOwner = {
      bio: owner.bio,
      email: owner.email,
      password: owner.password,
      name: owner.name,
    };
  }

  try {
    await Axios.patch("http://localhost:5000/api/owner/", objOwner, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (password) => {
  try {
    const owner = await Axios.post(
      "http://localhost:5000/api/login/",
      {},
      {
        auth: {
          username: "",
          password: password,
        },
      }
    );
    return owner.data.token;
  } catch (error) {
    throw new Error(error);
  }
};

export const verify = async (token) => {
  try {
    const resp = await Axios.post("http://localhost:5000/api/verify/", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return resp;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getArticle = async (id) => {
  try {
    const article = await Axios.get(
      "http://localhost:5000/api/articles/" + id,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return article.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getArticles = async () => {
  try {
    const articles = await Axios.get("http://localhost:5000/api/articles/", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    return articles.data;
  } catch (error) {
    throw new Error(error);
  }
};

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
    throw new Error(error);
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
    throw new Error(error);
  }
};
