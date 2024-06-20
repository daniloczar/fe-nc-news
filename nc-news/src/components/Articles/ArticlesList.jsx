import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticlesCard from "./ArticlesCard";
import { useParams } from "react-router-dom";
import { SortBy } from "../SortBy/SortBy";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState();
  const { topic } = useParams();

  useEffect(() => {
   api.getArticles({ topic, sort, order }).then((data) => {
    console.log('from allArticles',data)
      setIsLoading(false);
      setArticlesList(data.allArticles);
    });
  }, [topic, sort, order]);

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
      <h2 className="articleH2">{articlesHeader}</h2>
      <SortBy setSort={setSort} setOrder={setOrder} />
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

export default ArticlesList;
