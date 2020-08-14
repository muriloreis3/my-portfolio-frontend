import React, {useState, useEffect, Fragment } from 'react';

import * as API from '../../../api/api';
import HomeMenu from './HomeMenu/HomeMenu'
import { Switch, Route } from 'react-router-dom';

const Home = (props) => {
    const [owner, setOwner] = useState({});

    useEffect(() => {
        (async () =>  setOwner(await API.getOwner()))();
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