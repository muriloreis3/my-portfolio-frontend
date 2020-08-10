import React, {useState, useEffect} from 'react';
import * as API from '../../api/api';

import ArticleCard from './ArticleCard/ArticleCard';

export default function Articles(props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        (async () => setArticles(await API.getArticles()) )();
    }, []);

    const openArticle = (id) => {
        props.history.push('/article/'+id)
    }

    return (
        <div className="cardWrapper">
            {articles.map(article => {
                return <ArticleCard 
                    key={article._id}
                    title={article.title} 
                    content={article.content} 
                    clicked={() => openArticle(article._id)}/>
            })}
        </div>
    )
}
