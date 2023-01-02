import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';


class Login extends Component {
    render() {
  return (
    <Card className="text-center">
      <Card.Header as="h5">Log In</Card.Header>
        <Card.Body>
        <Form onSubmit={this.handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' placeholder='Email' />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <br />
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
    const res = fetch('http://localhost:4000/login', {
    method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
}
}

export default Login;