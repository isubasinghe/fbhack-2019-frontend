import React, { Component, Fragment } from 'react';

import { Form } from 'react-bootstrap';


import './signup.scss';


class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className='signup-container'>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicChecbox">
              <Form.Check className="checkbox-accept-tac" type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
        </div>
        
      </div>
    );
  }
}

export default Signup;