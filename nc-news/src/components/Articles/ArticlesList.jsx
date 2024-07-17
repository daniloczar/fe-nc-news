import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticlesCard from "./ArticlesCard";
import { useParams } from "react-router-dom";


const ArticlesList = ({ sortBy, order }) => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [isLoadingTopicsFailed, setIsLoadingTopicsFailed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesOnThisPage, setArticlesOnThisPage] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
    setIsLoadingTopicsFailed(false);
    setIsLoading(true);

    api
      .getArticles(topic, sortBy, order)
      .then((data) => {
        setArticlesList(data.allArticles);
        setArticlesOnThisPage(data.allArticles.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setIsLoadingTopicsFailed(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);
  const articlesHeader = topic
    ? `${
        topic.charAt(0).toUpperCase() + topic.slice(1).toLowerCase()
      }  Articles`
    : "Articles";

  if (isLoading) {
    return <h2>loading</h2>;
  }
  return (
    <section className="articleMain">
      {isLoading ? "Loading..." : null}
      {isLoadingTopicsFailed ? "Topic does not exist" : null}

      {!isLoading && !isLoadingTopicsFailed ? (
        <>
          <h2 className="articleH2">{articlesHeader}</h2>
          <section id="articlesList">
            {articlesList.map((article) => {
              return (
                <div key={article.article_id}>
                  <ArticlesCard article={article} />
                </div>
              );
            })}
          </section>
        </>
      ) : null}
    </section>
  );
};

export default ArticlesList;
