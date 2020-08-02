import React from 'react'

import classes from './Contact.module.css'

export default function Contact(props) {
    return (
        <div className={classes.Contact}>
            <div className={classes.wrapper}>
                <div className={classes.formGroup}>
                    <label>Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className={classes.formGroup}>
                    <label>Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className={classes.formGroup}>
                    <textarea name="content" id="content" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    )
}
