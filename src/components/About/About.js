import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import classes from './About.module.css';
import avatar from '../../assets/images/avatar.jpeg'

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
                <div className="card about">
                    <img src={ avatar } alt=""/>
                    <p>Olá meu nome é Murilo Alves sou Analista de Sistemas Jr na Capgemini, desenvolvedor NodeJs e ReactJs, nesse portal você ira encontrar um pouco do meu trabalho, caso goste pode entrar em contato. </p>
                </div>
            </div>
        </div>
    )
}
