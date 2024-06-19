import React from "react";
import Article from "../Articles/Article";
import ArticleId from "../Articles/ArticleId";
import Articles from "../Articles/Articles";
import ArticlesCard from "../Articles/ArticlesCard";
import CommentCard from "../Comments/CommentCard";
import HomeCard from "./HomeCard";
import HomeCardHeader from "./HomeCardHeader";

function Home() {
  return (
  <div>
    {/* <Article/> */}
    <CommentCard />
    <Articles />;
    <ArticleId />
  </div>
    )
}

export default Home;
