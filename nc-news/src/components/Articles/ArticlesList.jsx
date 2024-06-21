import { useState, useEffect } from "react";
import * as api from "../utils/api";
import ArticlesCard from "./ArticlesCard";
import { useParams } from "react-router-dom";
import { SortBy } from "../SortBy/SortBy";
import TabsBar from "../Toolbar/Toolbar";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("asc");
  const { topic } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [topicList, setTopicList] = useState([]);
  const [articlesOnThisPage, setArticlesOnThisPage] = useState([]);
  const [isLoadingTopicsFailed, setIsLoadingTopicsFailed] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
    setIsLoadingTopicsFailed(false);
    setIsLoading(true);

    api
      .getTopics()
      .then((data) => {
        setTopicList(data.ArrTopics);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
        setIsLoadingTopicsFailed(true);
      });

    api
      .getArticles(topic, sortBy, order)
      .then((data) => {
        console.log("getArticle----->", data.allArticles);
        setArticlesList(data.allArticles);
        setArticlesOnThisPage(data.allArticles.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);
  console.log("from articleList", articlesList);
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
          {/* <TabsBar setSortBy={setSortBy} setOrder={setOrder} /> */}
          <SortBy
            topicList={topicList}
            setSortBy={setSortBy}
            setOrder={setOrder}
          />
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
