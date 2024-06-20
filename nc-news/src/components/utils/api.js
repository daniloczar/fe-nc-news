import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-nc-news-z6wy.onrender.com/api",
});

export const getArticles = (topic, sort, order) => {
  return api
    .get("/articles")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleById = (article_id) => {
  return api
    .get(`/articles/${article_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const getTopics = (topic, sort, order) => {
  return api
    .get(`articles?topic=${topic}`, {
      params: { sort_by: sort, order: order },
    })
    .then((res) => {
      return res.data;
    });
};

export const getUsers = () => {
  return api.get("/users").then((res) => {
    return res.data;
  });
};

export const addCommentByArticleId = (author, body, article_id) => {
  return api
    .post(`/articles/${article_id}/comments`, { body, author })
    .then((res) => {
      return res.data;
    });
};

export const updateArticleById = (article_id) => {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
};

export const deleteCommentById = (comment_id) => {
  return api
    .delete(`/comments/${comment_id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

export function getDateFromTimestamp(timestamp) {
  return timestamp.split("T")[0];
}
