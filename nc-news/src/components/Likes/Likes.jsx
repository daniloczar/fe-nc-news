

export default function Likes(props) {
  const change = props.voteChange;

  return (
    <div className="voting">
      <button disabled={change > 0} onClick={props.upVote}>
        <img src='like' alt="heart" className="up" />
      </button>

      <div className="p-likes">{props.votes}</div>

      <button disabled={change < 0} onClick={props.downVote}>
        <img src='dislike' alt="broken heart" className="down" />
      </button>
    </div>
  );
}
