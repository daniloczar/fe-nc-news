import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/Articles/ArticlesList";
import ArticleId from "./components/Articles/ArticleId"
import { UserProvider } from "./components/User/UserContext";
import { useState } from "react";
import ArticleComments from "./components/Comments/ArticlesComment";
import TabsBar from "./components/Toolbar/Toolbar";
import UsersList from "./components/User/User"


function App() {
    // const [user, setUser] = useState({
    //   username: "jessjelly",
    //   name: "Jess Jelly",
    //   avatar_url:
    //     "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    // });
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("asc");
  return (
    <UserProvider>
      <div className="app">
        <Header/>
        <TabsBar setSortBy={setSortBy} setOrder={setOrder} />
        <Routes>
          <Route
            path="/"
            element={<UsersList />}
            // {<ArticlesList sortBy={sortBy} order={order} />}
          />
          <Route
            path="/articles"
            element={<ArticlesList sortBy={sortBy} order={order} />}
          />
          <Route
            path="/articles/:article_id"
            element={<ArticleId />}
          />
          <Route
            path="/topic/:topic"
            element={<ArticlesList sortBy={sortBy} order={order} />}
          />
          <Route path="/users" />
          <Route
            path="/articles/:article_id/comments"
            element={<ArticleComments />}
          />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
