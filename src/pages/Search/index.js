import React, { Component, Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Nav from '../../components/Nav';

import Profiles from '../Profiles';
class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <Nav activeKey='/search' />
        </MediaQuery>
        <Profiles />
        <MediaQuery query="(max-device-width: 1224px)">
          <Nav bottom activeKey='/search' />
        </MediaQuery>
      </Fragment>
    );
  }
}

export default Search;