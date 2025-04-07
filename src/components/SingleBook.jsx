import { Card, Col } from 'react-bootstrap'

const SingleBook = ({ book, isSelected, onBookSelect }) => {
  return (
    <Col xs={12} md={6} lg={3} className="mb-4">
      <Card
        onClick={onBookSelect}
        className={`h-100 border ${isSelected ? 'border-danger' : 'border-secondary'}`}
        style={{ cursor: 'pointer' }}
        bg="dark"
        text="light"
      >
        <div style={{ height: '300px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={book.img}
            alt={book.title}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fs-6">{book.title}</Card.Title>
          <Card.Text>
            {book.category} – {book.price}€
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleBook
