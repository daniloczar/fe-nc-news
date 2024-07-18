import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ArticleComments from "../Comments/ArticlesComment";
import PostComment from "../Comments/PostComment";
import { UserContext } from "../User/UserContext";
import { getArticleById } from "../utils/api";
import Loading from "../Loading/Loading";
import Article from "./Article";

export default function ArticleId() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [fetchedComments, setFetchedComments] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);
  const { users } = useContext(UserContext);

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
        <Loading />
      ) : (
        <div>
          <Article article={article} />
          <PostComment
            setArticleComments={setArticleComments}
            setFetchedComments={setFetchedComments}
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
