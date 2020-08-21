import React, { Fragment } from 'react'

import Card from '../UI/Card/card';
import classes from './ArticleList.module.css'

const ArticleList = (props) => {
    return (
        <Fragment>
            { props.articles.map(article => {
                return (
                    <Card 
                        key={article._id} 
                        clicked={() => props.openArticle(article._id)}
                        image={article.image ? article.image.toString() : null}>
                        {props.admin ? 
                            <div className={classes.Delete}>
                                <button onClick={(e) =>{ e.stopPropagation(); props.onDeleteArticle(article._id)}}><i className="fas fa-trash"></i></button>
                            </div>: null}   
                        <h1>{article.title}</h1>
                        <p>{article.content}</p>
                    </Card>
                )
            })}
        </Fragment>
    )
}

export default ArticleList;