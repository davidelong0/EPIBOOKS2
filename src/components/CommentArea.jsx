import { Component } from 'react'
import CommentsList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
    error: null,
  }

  fetchComments = async () => {
    try {
      this.setState({ loading: true, error: null })
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlOGM1OTk0OTJlNDAwMTVlN2M3MDAiLCJpYXQiOjE3NDM2ODY3NDUsImV4cCI6MTc0NDg5NjM0NX0.RVzqFHJsRpiNQZh7bSxVXUavJPN0UrVAgxjq6pkWQrI',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Errore nel recupero dei commenti')
      }

      const data = await response.json()
      this.setState({ comments: data })
    } catch (err) {
      this.setState({ error: err.message })
    } finally {
      this.setState({ loading: false })
    }
  }

  componentDidMount() {
    this.fetchComments()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments()
    }
  }

  addNewComment = (newComment) => {
    this.setState({ comments: [...this.state.comments, newComment] })
  }

  render() {
    const { loading, error, comments } = this.state

    return (
      <div>
        <h5>Recensioni</h5>
        {loading && <p>Caricamento...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <CommentsList comments={comments} />
        <AddComment asin={this.props.asin} addNewComment={this.addNewComment} />
      </div>
    )
  }
}

export default CommentArea
