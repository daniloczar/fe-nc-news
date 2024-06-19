import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Likes from "../Likes/Likes";
import { updateArticleById } from "../utils/api";

export default function Article({article}) {
  console.log('from article',article)
  
  const [voteChange, setVoteChange] = useState(0);
  const [voteCount, setVoteCount] = useState(article.votes);

  const upVote = () => {
    updateArticleById(article_id, 1);
    setVoteChange(voteChange + 1);
    setVoteCount(voteCount + 1);
  };

  const downVote = () => {
    updateArticleById(article_id, -1);
    setVoteChange(voteChange - 1);
    setVoteCount(voteCount - 1);
  };

  return (
    <div className="article-box">
      <section className="article">
        <div className="card_topic">
          <Link to={`/topic/${article.topic}`}>
            <p className={`article-${article.topic}`}>{topic.toUpperCase()}</p>
          </Link>
        </div>
        wdsiuabvaiofubvsdif
        <h2 className="card_title">{title.toUpperCase()}</h2>
        <div className="timeandby">
          <p className="card_author">By {article.author}</p>
          <p className="article_time">
            {moment(article.created_at).format("DD MMMM YYYY")}
          </p>
        </div>
        <p className="article-body">{article.body}</p>
        <div className="articlebylikecomment">
          <p className="articleCommentCount">
            <img
              src={comment}
              className="card_comments"
              alt="speech bubble icon"
            />
            {comment_count}
          </p>
          <Likes
            className="vote"
            article_id={article_id}
            votes={voteCount}
            upVote={upVote}
            downVote={downVote}
            voteChange={voteChange}
          />
        </div>
      </section>
    </div>
  );
}
