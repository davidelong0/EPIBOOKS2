import React, { useState } from "react";

const AddComment = ({ asin, addNewComment }) => {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError("Il commento non può essere vuoto.");
      return;
    }

    const newComment = {
      comment,
      rate: rate.toString(),
      elementId: asin,
    };

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGM1OTk0OTJlNDAwMTVlN2M3MDAiLCJpYXQiOjE3NDM2ODY3NDUsImV4cCI6MTc0NDg5NjM0NX0.RVzqFHJsRpiNQZh7bSxVXUavJPN0UrVAgxjq6pkWQrI",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );

      if (!response.ok) {
        throw new Error("Errore nell'aggiungere il commento");
      }

      const addedComment = await response.json();
      addNewComment(addedComment);
      setComment("");
      setRate("1");
    } catch (error) {
      setError("Errore nell'aggiungere il commento, riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Aggiungi un Commento</h3>
      <form onSubmit={handleSubmit}>
      <textarea
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  placeholder="Scrivi il tuo commento"
  rows="4"  
  cols="50"
  style={{
    width: '100%', 
    maxWidth: '100%',
    minHeight: '100px',
    maxHeight: '200px',
    resize: 'vertical', 
    overflow: 'auto', 
    padding: '8px',
  }}
/>
        <br />
        <select value={rate} onChange={(e) => setRate(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Caricamento..." : "Aggiungi commento"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddComment;
