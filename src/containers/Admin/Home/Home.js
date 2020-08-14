import React, {useState, useEffect, Fragment } from 'react';

import * as API from '../../../api/api';
import HomeMenu from '../../../components/Admin/HomeMenu/HomeMenu'
import { Switch, Route } from 'react-router-dom';

const Home = (props) => {
    const [owner, setOwner] = useState({});

    useEffect(() => {
        API.getOwner()
            .then(resp => {
                setOwner(resp);
            }).catch(error => {
                console.log(error);
            });
    }, [])

    return (
        <Fragment>
            <HomeMenu owner={owner}/>
            <Switch>
                <Route to="/admin/owner" />
                <Route to="/admin/articles" />
                <Route to="/admin/projects" />
            </Switch>
        </Fragment>
    )
}

export default Home;