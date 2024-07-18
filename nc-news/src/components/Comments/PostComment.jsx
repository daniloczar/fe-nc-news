import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../User/UserContext";
import { addCommentByArticleId } from "../utils/api";


export default function PostComment({ setArticleComments, setFetchedComments }) {
  const [newComment, setNewComment] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const { article_id } = useParams();
  const {users} =useContext(UserContext)

  const username = users

  
function handleSubmit(event) {
    setFetchedComments(false);
    event.preventDefault();
    
    addCommentByArticleId(username, newComment, article_id)
      .then((newCommentFromApi) => {
        setNewComment("");
        setFetchedComments(true);
        setCommentMessage("Comment posted successfully.");
        setTimeout(() => {
          setCommentMessage("");
        }, 3000);
        setArticleComments((currComments) => {
          return [newCommentFromApi, ...currComments];
        });
      })
      .catch((error) => {
        setCommentMessage("Failed to post comment. Please try again later.");
        console.error(error);
      });
  }
  return (
    <section className="form-content">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="postlabel">Leave a comment</label>
          </div>
          <textarea
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
            placeholder="Like this post?"
          />
          <div>
            <button className="submit" type="submit" disabled={!newComment}>
              Post
            </button>
            <p className="comment-success-message">{commentMessage}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
