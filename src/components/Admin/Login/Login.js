import React, { useState, useContext } from 'react';

import Logo from '../../Layout/Logo/Logo';
import classes from './Login.module.css';
import * as API from '../../../api/api';
import AuthContext from '../../../context/AuthContext';


function Login(props) {
    const [password, setPassword] = useState('');
    const context = useContext(AuthContext);

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const sendAuth = () => {
        API.login(password)
            .then(resp => {
                context.token = resp;
                localStorage.setItem('token', resp);
                props.history.push('/admin/home');
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div className={classes.Login}>
            <div className={classes.Box}>
                <div className={classes.Logo}>
                    <Logo width="150px"/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" value={password} onChange={handlePassword}/>
                    <button onClick={sendAuth}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;