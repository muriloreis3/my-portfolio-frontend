import React from 'react'

import Logo from '../../Layout/Logo/Logo'
import classes from './Login.module.css'

export default function Login() {
    const classesBox = ['wrapper', classes.LoginBox]
    return (
        <div className={classes.Login}>
            <div className={classesBox.join(' ')}>
                <div className="loginLogo">
                    <Logo width="150px"/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
