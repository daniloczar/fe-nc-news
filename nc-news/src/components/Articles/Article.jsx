import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/joy/Chip";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CardOverflow from "@mui/joy/CardOverflow";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useState } from "react";
import moment from "moment";
import { updateArticleById } from "../utils/api";
import { Checkbox } from "@mui/material";

export default function Article({ article }) {
  const [voteChange, setVoteChange] = useState(0);
  const [voteCount, setVoteCount] = useState(article.votes);

  const upVote = () => {
    updateArticleById(article.article_id, 1);
    setVoteChange(voteChange + 1);
    setVoteCount(voteCount + 1);
  };

  const downVote = () => {
    updateArticleById(article.article_id, -1);
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
                href: `/topic/${article.topic}`,
              },
            }}
          >
            {`${article.topic.toUpperCase()}`}
          </Chip>
          <CardMedia
            component="img"
            image={article.article_img_url}
            alt="image"
          />
        </CardOverflow>
        <CardContent>
          <Typography variant="body3" color="text.secondary">
            {<p className="card_author">By {article.author}</p>}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {
              <p className="article_time">
                {moment(article.created_at).format("DD MMMM YYYY")}
              </p>
            }
          </Typography>
          <Typography variant="body3" color="text.primary">
            {<h3 className="card_title">{article.title}</h3>}
          </Typography>
          <Typography variant="body3" color="text.primary">
            {<p className="article-body">{article.body}</p>}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end", pr: 4, mb: 1 }}>
          {/* make the vote buttom works */}
          <IconButton
            aria-label="Like"
            onClick={upVote}
            disabled={voteChange > 0}
          >
            <Checkbox
              icon={<FavoriteIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            />
          </IconButton>
          {<p className="artButtom-p">{voteCount}</p>}
          <IconButton
            aria-label="Dislike"
            onClick={downVote}
            disabled={voteChange < 0}
          >
            <Checkbox
              icon={<HeartBrokenIcon />}
              checkedIcon={<HeartBrokenIcon sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          {<p className="artButtom-p">{article.comment_count}</p>}
        </CardActions>
      </Card>
    </div>
  );
}
