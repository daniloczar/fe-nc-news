import NavBar from "../navbar/NavBar";
import UsersList from "../User/User";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Article from "../Articles/Article";
import Articles from "../Articles/Articles";
import ArticleId from "../Articles/ArticleId";

const Header = () => {
  return (
    <div>
      <NavBar />
      {/* <UsersList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleId />} />
        <Route path="/topic/:topic" element={<Articles />} />
      </Routes>
    </div>
  );
};

export default Header;
