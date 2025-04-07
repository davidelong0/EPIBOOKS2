import { Container, Form, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Component } from 'react'

class BookList extends Component {
  state = {
    search: '',
    selectedAsin: null,
  }

  handleBookSelect = (asin) => {
    this.setState({ selectedAsin: asin })
  }

  render() {
    const filteredBooks = this.props.arrayOfBooks.filter((libro) =>
      libro.title.toLowerCase().includes(this.state.search.toLowerCase())
    )

    return (
      <Container fluid>
        <Row className="justify-content-center my-4">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Cerca un libro"
              value={this.state.search}
              onChange={(e) =>
                this.setState({ search: e.target.value })
              }
              className="bg-dark text-light border-secondary"
            />
          </Col>
        </Row>

        <Row>
          {/* Colonna sinistra: griglia libri */}
          <Col md={8}>
            <Row>
              {filteredBooks.map((libro) => (
                <SingleBook
                  book={libro}
                  key={libro.asin}
                  isSelected={this.state.selectedAsin === libro.asin}
                  onBookSelect={() => this.handleBookSelect(libro.asin)}
                />
              ))}
            </Row>
          </Col>

          {/* Colonna destra: CommentArea */}
          <Col md={4}>
            <div className="bg-secondary text-light p-3 rounded sticky-top" style={{ top: '80px' }}>
              {this.state.selectedAsin ? (
                <CommentArea asin={this.state.selectedAsin} />
              ) : (
                <p>Seleziona un libro per vedere i commenti</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default BookList
