
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from '../Comments/ArticlesComment';
import { getArticleById } from '../utils/api';
import Article from './Article';


export default function ArticleId() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      getArticleById(article_id).then((article) => {
        setArticle(article);
        setIsLoading(false);
        setReload(false);
      });
    }
  }, [article_id, reload]);

  return (
    <>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <Article article={article} />
          {/* <PostComment article_id={article_id} /> */}
          <ArticleComments articleId={article_id} />
        </div>
      )}
    </>
  );
}
