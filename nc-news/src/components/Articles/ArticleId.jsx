import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from "../Comments/ArticlesComment";
import PostComment from "../Comments/PostComment";
import { getArticleById } from "../utils/api";
import Article from "./Article";

export default function ArticleId({ currentUser }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [fetchedComments, setFetchedComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      getArticleById(article_id).then(({ article }) => {
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
          <PostComment
            setArticleComments={setArticleComments}
            setFetchedComments={setFetchedComments}
            currentUser={currentUser}
          />
          <ArticleComments
            articleComments={articleComments}
            setArticleComments={setArticleComments}
            fetchedComments={fetchedComments}
          />
        </div>
      )}
    </>
  );
}
