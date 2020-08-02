import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import classes from './About.module.css';

export default function About(props) {
    const [owner, setOwner] = useState({})
    useEffect(() => {
        Axios.get('http://localhost:5000/owner',{
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(resp => {
            setOwner(resp.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [])

    return (
        <div className={classes.About}>
            <div className="wrapper">
                <h2>{owner.name}</h2>    
            </div>
        </div>
    )
}
