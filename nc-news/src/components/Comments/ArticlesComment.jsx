import React, { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";



export default function ArticleComments(props) {
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
// console.log(comments)
  useEffect(() => {
    if (reload) {
      getCommentsByArticleId(props.article_id).then((result) => {
        console.log("articles comment", result);
        setComments(result);
        setIsLoading(false);
        setReload(false);
      });
    }
  }, [props, reload]);

  return (
    <div className="art_comments_header">
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h3>Comments:</h3>
          {comments.comments.map((comment) => {
            // coments cards
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </div>
      )}
    </div>
  );
}
