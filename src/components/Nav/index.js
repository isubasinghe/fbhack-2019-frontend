import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';

import './nav.scss';

class Navbar extends Component {
  render() {
    let bottom = '';
    if(this.props.bottom !== undefined) {
      bottom = 'nav-bottom';
    }
    return (
      <div className={'nav-container ' + bottom}>
        <Nav fill variant="pills" activeKey={this.props.activeKey}>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/myprofile">Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Navbar;