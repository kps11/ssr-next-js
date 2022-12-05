import React from 'react';
import articleStyle from "../styles/Article.module.css"
import Link from 'next/link';

function ArticleItem({ article }) {
    return (
       <Link href= {`/article/${article.id}`}>
            <div className={articleStyle.card}>
                <h3>{article.title}</h3> 
                <p>{article.body}</p>
            </div>
       </Link>
    );
}

export default ArticleItem;