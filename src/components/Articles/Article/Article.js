import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function Article(props) {
    const [article, setArticle] = useState({})
    useEffect(() => {
        Axios.get('http://localhost:5000/articles/'+ props.match.params.id,{
            headers: {                  
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(resp => {
            console.log(resp.data);
            setArticle(resp.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [props.match.params.id])

    return (
        <div>
            <h2>{article.title}</h2>
            <div>
                {article.content}
            </div>
        </div>
    )
}
