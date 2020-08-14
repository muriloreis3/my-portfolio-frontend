import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login/Login'
import Home from './Home/Home'

export default function Admin(props) {
    return (
        <Switch>
            <Route path={ props.match.path + '/login'} component={ Login }/>
            <Route path={ props.match.path + '/home'} component={ Home }/>
            <Redirect path={ props.match.path } to={ props.match.path + '/login'} />
        </Switch>
    )
}
