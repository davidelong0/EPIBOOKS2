import { useEffect, useState } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGM1OTk0OTJlNDAwMTVlN2M3MDAiLCJpYXQiOjE3NDM2ODY3NDUsImV4cCI6MTc0NDg5NjM0NX0.RVzqFHJsRpiNQZh7bSxVXUavJPN0UrVAgxjq6pkWQrI",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Errore nel recupero dei commenti");
      }

      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [asin]);

  const addNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h5>Recensioni</h5>
      {loading && <p>Caricamento...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <CommentsList comments={comments} />
      <AddComment asin={asin} addNewComment={addNewComment} />
    </div>
  );
};

export default CommentArea;
