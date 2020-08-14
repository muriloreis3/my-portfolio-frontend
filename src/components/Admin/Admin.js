import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../../containers/Login/Login';
import Home from '../../containers/Admin/Home/Home';
import NotFound from '../NotFound/NotFound';
import AuthContext from '../../context/AuthContext';

export default function Admin(props) {
    const context = useContext(AuthContext);
    let content = (
        <Switch>
            <Route path={ props.match.path + '/login'} component={ Login }/>
            <Redirect exact path={ props.match.path } to={ props.match.path + '/login'} />
            <Route component={NotFound}/>
        </Switch>
    );

    if (context.token !== null) {
        content =(
            <Switch>
                <Route path={ props.match.path + '/home'} component={ Home }/>
                <Redirect exact path={ props.match.path } to={ props.match.path + '/home'} />
                <Route component={NotFound}/>
            </Switch>
        );
    }
    return content;
}
