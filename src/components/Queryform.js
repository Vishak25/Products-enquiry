import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



class Queryform extends Component {
  render() {
    return (
      <Card className="text-center">
      <Card.Header as="h5">Tell us what you are looking for?</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" placeholder="Your Name" />
            {/* <Form.Text className="text-muted">
              
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Control type="number" placeholder="Your Phone Number" />
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicQuery">
            <Form.Control type="text" placeholder="Your Query" />
          </Form.Group>  
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control as="textarea" rows={5} type="text" placeholder="Description" />
          </Form.Group>  
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Form>
          
        </Card.Body>
      </Card>
      
    );
  }
  handleSubmit(event) {
    // Prevent default behavior
    event.preventDefault();

    const data = new FormData(event.target);
    const res = fetch('http://localhost:4000/api/v1/customerbookings', {
    method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    // const data = await res.json()
    // Access FormData fields with `data.get(fieldName)`
    // For example, converting to upper case
    // data.set('username', data.get('username').toUpperCase());

    // Do your Axios stuff here
}

}

 
export default Queryform