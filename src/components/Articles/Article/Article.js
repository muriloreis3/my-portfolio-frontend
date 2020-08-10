import React, { useEffect, useState } from 'react';
import * as API from '../../../api/api';

export default function Article(props) {
    const [article, setArticle] = useState({})
    useEffect(() => {
        (async () => setArticle(await API.getArticle(props.match.params.id)))();
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
