import React from 'react'

import classes from './Contact.module.css'
import Form from '../UI/Form/form';

export default function Contact(props) {
    const send = (message) => {
        console.log(message);
    }
    
    return (
        <div className={classes.Contact}>
            <Form submited={send}>
                <div className="formGroup">
                    <label>Name</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className="formGroup">
                    <label>Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className="formGroup">
                    <label>Message</label>
                    <textarea name="content" id="content"></textarea>
                </div>
            </Form>        
        </div>
    )
}
