import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './Login/Login'

export default function Admin(props) {
    return (
        <Switch>
            <Route path={ props.match.path + '/login'} component={ Login }/>
            <Redirect path={ props.match.path } to={ props.match.path + '/login'} />
        </Switch>
    )
}
