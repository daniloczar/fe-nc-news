import { useState, useEffect } from "react";
import HomeCard from "../Home/HomeCard";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticlesCard from "./ArticlesCard";

const Articles = () => {
  const [articlesList, setArticlesList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
   getArticles()
   .then((data) => {
     setIsLoading(false);
     setArticlesList(data.allArticles);
   });
}, [])

if (isLoading){
    return <h2>loading</h2>
}
    return (<section >
        <h2>Articles</h2>
        <section id="articlesList">
            {articlesList.map((article)=>{
                return (
                  <div key={article.article_id}>
                    <ArticlesCard article={article} />
                    {/* <HomeCard article={article}/> */}
                  </div>
                );
            })}
        </section>
        </section>
       
    )
};

export default Articles;