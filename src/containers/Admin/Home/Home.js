import React, { useState, useEffect, Fragment, useContext } from "react";

import * as API from "../../../api/api";
import HomeMenu from "../../../components/Admin/HomeMenu/HomeMenu";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const Home = (props) => {
  const [owner, setOwner] = useState({});
  const { token } = useContext(AuthContext);

  useEffect(() => {
    API.getOwner()
      .then((resp) => {
        setOwner(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let content = null;

  if (token !== null) {
    content = (
      <Fragment>
        <HomeMenu owner={owner} />
        <Switch>
          <Route to="/admin/owner" />
          <Route to="/admin/articles" />
          <Route to="/admin/projects" />
        </Switch>
      </Fragment>
    );
  }

  return content;
};

export default Home;
