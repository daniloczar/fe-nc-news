import React from "react";
import moment from "moment";
import { deleteCommentById } from "../utils/api";


export default function CommentCard(props) {
  let { author, body, comment_id, created_at, votes } = props;
console.log('from comment card',props)

  const handleClick = () => {
    deleteCommentById(comment_id).then(() => {
      alert("Comment deleted!");
    });
  };

  return (
    <div>
      <dl className="individual-comment-box">
        <div className="timeandby2">
          <dt className="card_author">By {author}</dt>
          <dt className="article_time">
            {moment(created_at).format("MMM Do YYYY")}
          </dt>
        </div>
        <dt className="comment_body">{body}</dt>
        <div className="likeanddelete">
          <dt>Votes {votes}</dt>
          <img
            src=''
            onClick={handleClick}
            className="bin"
            alt="a bin icon"
          />
        </div>
      </dl>
    </div>
  );
}
