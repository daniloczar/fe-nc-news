

export default function Likes(props) {
  const change = props.voteChange;
  

  return (
    <div className="voting">
     <button disabled={change < 0} onClick={props.downVote}>
      </button>
    </div>
  );
}
