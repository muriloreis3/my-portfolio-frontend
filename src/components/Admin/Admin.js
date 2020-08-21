import React, { useContext, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../../containers/Login/Login";
import Owner from "../../containers/Admin/Owner/Owner";
import Articles from "../../containers/Admin/Articles/Articles"
import Article from "../../containers/Admin/Articles/Article/Article"
import Projects from "../../containers/Admin/Projects/Projects";
import HomeMenu from "./HomeMenu/HomeMenu";
import * as API from "../../api/api";
import NotFound from "../NotFound/NotFound";
import { AuthContext } from "../../context/AuthContext";
import classes from './Admin.module.css'
import Project from "../../containers/Admin/Projects/Project/Project";

export default function Admin(props) {
  const { token } = useContext(AuthContext);
  const [owner, setOwner] = useState({});

  useEffect(() => {
    API.getOwner()
      .then((resp) => {
        setOwner(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  let content = (
    <Switch>
      <Route path={props.match.path + "/login"} component={Login} />
      <Redirect
        exact
        path={props.match.path}
        to={props.match.path + "/login"}
      />
      <Route component={NotFound} />
    </Switch>
  );

  if (token !== null) {
    content = (
      <div className={classes.Admin}>
        <HomeMenu owner={owner} />
        <Switch>
          <Route path={props.match.path + "/owner"}  component={Owner}/>
          <Route path={props.match.path + "/articles"}  component={Articles}/>
          <Route path={props.match.path + "/article/:id"}  component={Article}/>
          <Route path={props.match.path + "/article/"}  component={Article}/>
          <Route path={props.match.path + "/projects"}  component={Projects}/>
          <Route path={props.match.path + "/project/:id"}  component={Project}/>
          <Route path={props.match.path + "/project/"}  component={Project}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
  
  return content;
}
