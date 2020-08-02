import React from 'react'

import classes from './Login.module.css'

export default function Login() {
    const classesBox = ['wrapper', classes.LoginBox]
    return (
        <div className={classes.Login}>
            <div className={classesBox.join(' ')}>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <input type="submit" value="Login"/>
                </div>
            </div>
        </div>
    )
}
