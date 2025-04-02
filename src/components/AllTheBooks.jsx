import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import scifi from '../data/scifi.json'
// scifi è un array di libri!

const AllTheBooks = function () {
  return (
    <Container>
      <Row>
        {scifi.map((scifiBook) => {
          return (
            <Col xs={12} md={4} lg={3} key={scifiBook.asin}>
              <Card>
                <Card.Img variant="top" src={scifiBook.img} />
                <Card.Body>
                  <Card.Title>{scifiBook.title}</Card.Title>
                  <Card.Text>
                    {scifiBook.asin} - {scifiBook.price}€
                  </Card.Text>
                  <Button variant="primary">COMPRAMI</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks
