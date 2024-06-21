import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import ArticlesList from "./components/Articles/ArticlesList";
import ArticleId from "./components/Articles/ArticleId"
import UsersList from "./components/User/User";
import { UserContext } from "./components/User/UserContext";
import { useState } from "react";
import ArticleComments from "./components/Comments/ArticlesComment";


function App() {
    const [currentUser, setCurrentUser] = useState({
      username: "jessjelly",
      name: "Jess Jelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    });
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route
            path="/articles/:article_id"
            element={<ArticleId currentUser={currentUser} />}
          />
          <Route path="/topic/:topic" element={<ArticlesList />} />
          <Route path="/users" />
          <Route
            path="/articles/:article_id/comments"
            element={<ArticleComments />}
          />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
