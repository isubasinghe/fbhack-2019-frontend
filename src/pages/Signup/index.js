import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap';

import logo from '../../hackr.svg';

import './signup.scss';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.data = {
      email: React.createRef(),
      password: React.createRef(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.data.email.value);
    console.log(this.data.password.value);

  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className='signup-container'>
          <img className="hackr-logo" src={logo} />
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={input => {this.data.email = input}} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control ref={input => {this.data.password = input} }type="password" placeholder="Password" />
            </Form.Group>

            <Button className="submit-button" onClick={this.handleSubmit} >
              Submit
            </Button>
    
          </Form>
        </div>
        
      </div>
    );
  }
}

export default Signup;