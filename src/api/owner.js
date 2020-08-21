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
    throw new Error(error.message);
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
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        auth: {
          username: "",
          password: password,
        },
      }
    );
    return owner.data.token;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const verify = async (token) => {
  try {
    const resp = await Axios.post("http://localhost:5000/api/verify/", null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    });
    return resp;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const saveOwnerAvatar = async (formData, id, token) => {
  try {
    await Axios.post(
      "http://localhost:5000/api/owner/avatar",
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
}

export const contactOwner = async (sendData) => {
  try {
    await Axios.post("http://localhost:5000/api/owner/contactme", sendData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    })
    return;
  } catch (error) {
    throw new Error(error.message)
  }
}