import React, {useState, useEffect} from 'react';
import * as API from '../../api/api';

import ArticleList from '../../components/Articles/ArticleList/ArticleList';

export default function Articles(props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        API.getArticles()
            .then(resp => {
                setArticles(resp);
            }).catch(error =>{
                console.log(error);
            });
    }, []);

    const openArticle = (id) => {
        props.history.push('/article/'+id)
    }

    return (
        <div className="cardWrapper">
            <ArticleList articles={articles} openArticle={openArticle}/>
        </div>
    )
}
