import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';

import './nav.scss';

class Navbar extends Component {
  render() {
    return (
      <div className='nav-container'>
        <Nav variant="pills" activeKey={this.props.activeKey}>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Navbar;