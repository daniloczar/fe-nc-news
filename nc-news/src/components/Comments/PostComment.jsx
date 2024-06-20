import React, { useState } from "react";
import { addCommentByArticleId } from "../utils/api";


export default function PostComment({ setComments, article_id }) {
  const [comment, setComment] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      username: "user",
      body: comment,
    };

    if (newComment.body.length === 0) {
      console.log("Don't forget to include a comment!");
    } else {
      setErr(false);
      setComment("");
      addCommentByArticleId(article_id, newComment)
        .catch((err) => {
          setErr(err);
          console.log("Somthing went wrong! Please try again");
          setComments((currComments) => {
            currComments.slice(1);
          });
        })
        .then((newResponseComment) => {
          setComments((currComments) => {
            return [newResponseComment, ...currComments];
          });
        });
    }
  };
  console.log(err);
  return (
    <section className="form-content">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="postlabel">Leave a comment</label>
            </div>
            <textarea
              value={comment}
              onChange={handleChange}
              placeholder="Like this post?"
            />
            <div>
              <button className="submit" type="submit">
                Post
              </button>
            </div>
          </form>
        </div>
    </section>
          );
}
