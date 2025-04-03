import { Component } from "react";
import CommentsList from "./CommentList"; 
import AddComment from "./AddComment";    

class CommentArea extends Component {
  state = {
    recensioni: [],
    loading: true,
    error: null,
  };

 
  getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGM1OTk0OTJlNDAwMTVlN2M3MDAiLCJpYXQiOjE3NDM2ODY3NDUsImV4cCI6MTc0NDg5NjM0NX0.RVzqFHJsRpiNQZh7bSxVXUavJPN0UrVAgxjq6pkWQrI" 
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei commenti");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ recensioni: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  };

  
  componentDidMount() {
    this.getComments();
  }

 
  addNewComment = (newComment) => {
    this.setState((prevState) => ({
      recensioni: [newComment, ...prevState.recensioni],
    }));
  };

  render() {
    const { recensioni, loading, error } = this.state;

    return (
      <div className="mt-3">
        <h5>Commenti</h5>
        {loading && <p>Caricamento...</p>}
        {error && <p>{error}</p>}
        {recensioni.length === 0 && !loading && !error && <p>Non ci sono commenti per questo libro.</p>}

        <CommentsList comments={recensioni} />
        <AddComment bookId={this.props.bookId} addNewComment={this.addNewComment} />
      </div>
    );
  }
}

export default CommentArea;
