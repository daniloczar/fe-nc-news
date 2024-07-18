import React, { useState, useEffect } from "react";
import { getCommentsByArticleId, deleteCommentById } from "../utils/api";
import { useParams } from "react-router";
import moment from "moment";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import Loading from "../Loading/Loading";

export default function ArticleComments({
  articleComments,
  setArticleComments,
  fetchedComments,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const handleDeleteSuccess = (commentId) => {
    setIsDeleting(true);

    deleteCommentById(commentId)
      .then(() => {
        setArticleComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== commentId)
        );
        setIsDeleting(false);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
        setIsDeleting(false);
      });
  };

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ comments }) => {
      setArticleComments(comments);
      setIsLoading(false);
    });
  }, [fetchedComments, article_id]);

  if (isLoading)
    return (
      <>
        <Loading />
        <img
          className="Preloader"
          src="https://media1.tenor.com/m/IzWeYVhewBsAAAAd/the-simpsons-homer.gif"
          https:alt="Preloader gif"
        />
        ;
      </>
    );
  if (!isLoading && articleComments.length === 0) return <p>No comments</p>;
  return (
    <section className="Comments">
      <h3 className="art_comments_header">Comments</h3>

      <ul>
        {articleComments.map(
          ({ comment_id, body, author, votes, created_at }, index) => {
            return (
              <div key={index} className="comment-card-container">
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
                      <IconButton
                        className="button"
                        onClick={() => handleDeleteSuccess(comment_id)}
                        disabled={isDeleting}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                      {isDeleting && <button disabled>Deleting...</button>}
                    </div>
                  </div>
                </dl>
              </div>
            );
          }
        )}
      </ul>
    </section>
  );
}
