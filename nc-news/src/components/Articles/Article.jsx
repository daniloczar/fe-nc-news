import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/joy/Chip";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardOverflow from "@mui/joy/CardOverflow";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";


import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Likes from "../Likes/Likes";
import { updateArticleById } from "../utils/api";

export default function Article({ article }) {
  // console.log(article)
  const [voteChange, setVoteChange] = useState(0);
  const [voteCount, setVoteCount] = useState(article.article.votes);

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
      <Card sx={{ maxWidth: 900 }}>
        <CardOverflow>
          <Chip
            size="lg"
            variant="solid"
            color="primary"
            sx={{
              position: "absolute",
              zIndex: 2,
              right: "1rem",
              bottom: 0,
              transform: "translateY(50%)",
            }}
            slotProps={{
              action: {
                component: "a",
                href: `/topic/${article.article.topic}`,
              },
            }}
          >
            {`${article.article.topic.toUpperCase()}`}
          </Chip>
          <CardMedia
            component="img"
            image={article.article.article_img_url}
            alt="image"
          />
        </CardOverflow>
        <CardContent>
          <Typography variant="body3" color="text.secondary">
            {
              <p className="article_time">
                {moment(article.article.created_at).format("DD MMMM YYYY")}
              </p>
            }
          </Typography>
          <Typography variant="body3" color="text.primary">
            {
              <h3 className="card_title">
                {article.article.title}
              </h3>
            }
          </Typography>
          <Typography variant="body3" color="text.primary">
            {<p className="article-body">{article.article.body}</p>}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* make the vote buttom works */}
          <IconButton
            aria-label="Like"
            // disable={voteChange < 0}
            onClick={() => {
              upVote
            }}
          >
            <FavoriteIcon />
          </IconButton>
          {<p>{article.article.votes}</p>}
          <IconButton aria-label="Dislike">
            <HeartBrokenIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
            {
              <p className="articleCommentCount">
                {article.article.comment_count}
              </p>
            }
          </IconButton>
          <Typography variant="body3" color="text.secondary">
            {<p className="card_author">By {article.article.author}</p>}
          </Typography>
        </CardActions>
      </Card>
      <div className="articlebylikecomment">
        <Likes
          className="vote"
          article_id={article.article.article_id}
          votes={voteCount}
          upVote={upVote}
          downVote={downVote}
          voteChange={voteChange}
        />
      </div>
    </div>
  );
}
