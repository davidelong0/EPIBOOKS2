import { Component } from 'react'
import { Card, Button, Col } from 'react-bootstrap'

// SingleBook deve far vedere un libro! Ma non sa di quale libro si tratta...
// ...sa solo che lo riceverà nelle props sotto forma di "book"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Col xs={12} md={6} lg={3}>
        <Card
          // className={
          //   this.state.selected ? 'altraclasse selectedBook' : 'altraclasse'
          // }
          //   className={`altraclasse ${this.state.selected ? 'selectedBook' : ''}`}
          style={{
            border: this.state.selected ? '2px solid red' : '1px solid gray',
          }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => {
              this.setState({
                selected: !this.state.selected, // toggle
              })
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              {this.props.book.category} - {this.props.book.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
