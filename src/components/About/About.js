import React, {useState, useEffect} from 'react';

import * as API from '../../api/api';
import classes from './About.module.css';

export default function About(props) {
    const [owner, setOwner] = useState({});

    useEffect(() => {
        (async () =>  setOwner(await API.getOwner()))();
    }, [])

    return (
        <div className={classes.About}>
            <div className={classes.avatar}>
                <img src={`data:image/jpeg;base64,${owner.avatar}`} alt=""/>
            </div>
            <div className={classes.text}>
                <h2>Hello my name is {owner.name}</h2>
                <p>{owner.bio}</p>
            </div>
        </div>
    )
}
