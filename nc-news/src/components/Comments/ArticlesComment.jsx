import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";



export default function ArticleComments(articleId) {
    const [comments, setComments] = useState([]);
    const [reload, setReload] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      if (reload) {
        getCommentsByArticleId(article_id).then((comments) => {
          console.log("articles comment", comments);
          setComments(comments);
          setIsLoading(false);
          setReload(false);
        });
      }
    }, [articleId, reload]);

  return (
    <div>
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h3>Comments:</h3>
          {comments.map((comment) => {
            // coments cards
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </div>
      )}
    </div>
  );
}
