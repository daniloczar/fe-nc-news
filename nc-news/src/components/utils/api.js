import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-project-nc-news-z6wy.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then((res) => {
    return res.data;
  }).catch((err) =>{
    console.log(err)
  })
}

export const getArticleById = (article_id) => {
 return api.get(`/articles/${article_id}`).then((res) => {
   return res.data;
 });
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const getTopics = () => {
  return api.get("/topics").then((res) => {
    return res.data;
  });
};

export const getUsers = () => {
 return api.get("/users").then((res) => {
   return res.data;
 });
};

export const addCommentByArticleId = (username, body, article_id) => {
  const postBody = {
    username: username,
    body: body,
  };
  return api
    .post(`/articles/${article_id}/comments`, postBody)
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
