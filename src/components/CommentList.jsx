import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))
      ) : (
        <p>Nessun commento ancora.</p>
      )}
    </div>
  );
};

export default CommentsList;
