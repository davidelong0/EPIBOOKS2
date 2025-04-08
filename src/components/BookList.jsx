import { Container, Form, Row, Col } from 'react-bootstrap'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'

const BookList = ({ arrayOfBooks }) => {
  const [state, setState] = useState({
    search: '',
    selectedAsin: null,
  })

  const handleBookSelect = (asin) => {
    setState((prevState) => ({
      ...prevState,
      selectedAsin: asin,
    }))
  }

  const handleSearchChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      search: e.target.value,
    }))
  }

  const filteredBooks = arrayOfBooks.filter((libro) =>
    libro.title.toLowerCase().includes(state.search.toLowerCase())
  )

  return (
    <Container fluid>
      <Row className="justify-content-center my-4">
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Cerca un libro"
            value={state.search}
            onChange={handleSearchChange}
            className="bg-dark text-light border-secondary"
          />
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Row>
            {filteredBooks.map((libro) => (
              <SingleBook
                book={libro}
                key={libro.asin}
                isSelected={state.selectedAsin === libro.asin}
                onBookSelect={() => handleBookSelect(libro.asin)}
              />
            ))}
          </Row>
        </Col>

        <Col md={4}>
          <div
            className="bg-secondary text-light p-3 rounded sticky-top"
            style={{ top: '80px' }}
          >
            {state.selectedAsin ? (
              <CommentArea asin={state.selectedAsin} />
            ) : (
              <p>Seleziona un libro per vedere i commenti</p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
