import React, { Component, Fragment } from 'react';

import { Form, Button } from 'react-bootstrap';


import './signup.scss';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.data = {
      email: React.createRef(),
      password: React.createRef(),
    };
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className='signup-container'>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control inputRef={input => {this.data.email = input}} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control inputRef={input => {this.data.password = input} }type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicChecbox">
              <Form.Check className="checkbox-accept-tac" type="checkbox" label="I agree to the Terms and Conditions" />
            </Form.Group>

            <Form.Group controlId="submit">
              <Button className="submit-button" onClick={this.handleSubmit} >
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
        
      </div>
    );
  }
}

export default Signup;