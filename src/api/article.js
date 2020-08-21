import Axios from "axios";

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
    throw new Error(error.message);
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
    throw new Error(error.message);
  }
};

export const editArticle = async (article, token) => {
  let objArticle = {
    title: article.title,
    keywords: article.keywords,
    content: article.content,
  };
  try {
    const resp = await Axios.patch(
      "http://localhost:5000/api/articles/" + article._id,
      objArticle,
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

export const createArticle = async (article, token) => {
  let objArticle = {
    title: article.title,
    keywords: article.keywords,
    content: article.content,
  };
  try {
    const article = await Axios.post(
      "http://localhost:5000/api/articles/",
      objArticle,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return article.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveArticleImage = async (formData, id, token) => {
  try {
    await Axios.post(
      "http://localhost:5000/api/articles/image/" + id,
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

export const deleteArticle = async (id, token) => {
  try {
    const article = await Axios.delete(
      "http://localhost:5000/api/articles/" + id,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return article.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
