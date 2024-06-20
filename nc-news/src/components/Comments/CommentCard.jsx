import React from "react";
import moment from "moment";
import { deleteCommentById } from "../utils/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

export default function CommentCard(props) {
  let { author, body, comment_id, created_at, votes } = props;

  const handleClick = () => {
    deleteCommentById(comment_id).then(() => {
      console.log("Comment deleted!");
    });
  };

  return (
    <div className="comment-card-container">
      <dl className="individual-comment-box">
        <div className="timeandby2">
          <dt className="card_author">By {author}</dt>
        </div>
        <dt className="comment_body">{body}</dt>
        <div className="comment-footer">
          <dt className="article_time">
            Posted on {moment(created_at).format("D MMMM YYYY")}
          </dt>
          <div className="likeanddelete">
            <dt className="votes-p">Votes: {votes}</dt>
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
            <img
              src=""
              onClick={handleClick}
              className="bin"
              alt="a bin icon"
            />
          </div>
        </div>
      </dl>
    </div>
  );
}
