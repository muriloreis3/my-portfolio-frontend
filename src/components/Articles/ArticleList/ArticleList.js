import React, { Fragment } from 'react'

import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = (props) => {
    return (
        <Fragment>
            { props.articles.map(article => {
                return <ArticleCard 
                    key={article._id}
                    title={article.title} 
                    content={article.content} 
                    clicked={() => props.openArticle(article._id)}/>
            })}
        </Fragment>
    )
}

export default ArticleList;