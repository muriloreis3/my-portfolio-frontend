import React, { useEffect, useState } from 'react';
import * as API from '../../../api/api';

export default function Article(props) {
    const [article, setArticle] = useState({})
    useEffect(() => {
        API.getArticle(props.match.params.id)
            .then(resp => {
                setArticle(resp);
            }).catch(error => {
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
