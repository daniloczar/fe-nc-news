import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import ArticlesList from "./components/Articles/ArticlesList";
import ArticleId from "./components/Articles/ArticleId"


function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticlesList />}/>
        <Route path="/articles/:article_id" element={<ArticleId />} />
        <Route path="/topic/:topic"  />
      </Routes>
    </div>
  );
}

export default App;
