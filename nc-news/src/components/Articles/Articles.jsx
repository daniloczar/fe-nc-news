import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import ArticlesCard from "./ArticlesCard";
import { useParams } from "react-router-dom";

const Articles = ({ sortBy, order }) => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticles({ topic, sortBy, order }).then((data) => {
      setIsLoading(false);
      setArticlesList(data.allArticles);
    });
  }, [topic, sortBy, order]);

  const articlesHeader = topic ? 
  `${topic.charAt(0).toUpperCase() + topic.slice(1).toLowerCase()}  Articles`
    : "Articles";

  if (isLoading) {
    return <h2>loading</h2>;
  }
  return (
    <section className="articleMain">
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
    </section>
  );
};

export default Articles;