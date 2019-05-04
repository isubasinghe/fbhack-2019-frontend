import React, { Component, Fragment } from 'react';

import MediaQuery from 'react-responsive';

import Nav from '../../components/Nav';

class Homepage extends Component {
  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <Nav activeKey='/' />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <Nav bottom activeKey='/' />
        </MediaQuery>
      </Fragment>
    );
  }
}

export default Homepage;