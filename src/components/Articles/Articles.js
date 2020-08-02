import React, {useState, useEffect} from 'react';
import Axios from 'axios'

import classes from './Articles.module.css';
import ArticleCard from './ArticleCard/ArticleCard';

export default function Articles(props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:5000/articles',{
                headers: {                  
                    "Access-Control-Allow-Origin": "*"
                }
            })
            .then(resp => {
                console.log(resp.data);
                setArticles(resp.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const openArticle = (id) => {
        props.history.push('/article/'+id)
    }

    return (
        <div>
            {articles.map(article => {
                return <ArticleCard title={article.title} content={article.content} clicked={() => openArticle(article._id)}/>
            })}
        </div>
    )
}
