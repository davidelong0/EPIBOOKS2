const SingleComment = ({ comment }) => {
  return (
    <div style={{ borderBottom: "1px solid gray", padding: "5px" }}>
      <p><strong>Commento:</strong> {comment.comment}</p>
      <p><strong>Voto:</strong> {comment.rate}/5</p>
    </div>
  );
};

export default SingleComment;
