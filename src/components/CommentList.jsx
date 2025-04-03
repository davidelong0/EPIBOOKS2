import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h3>Lista dei Commenti</h3>
      {comments.length === 0 ? (
        <p>Non ci sono commenti per questo libro.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p><strong>Commento:</strong> {comment.comment}</p>
              <p><strong>Rating:</strong> {getRatingText(comment.rate)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Funzione per restituire un testo descrittivo del rating
const getRatingText = (rate) => {
  switch (rate) {
    case "1":
      return "Pessimo";
    case "2":
      return "Mediocre";
    case "3":
      return "Buono";
    case "4":
      return "Molto buono";
    case "5":
      return "Eccellente";
    default:
      return "N/A";
  }
};

export default CommentsList;
